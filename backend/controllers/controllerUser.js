import bcrypt from 'bcrypt'; //password hashing
import generateToken from '../../../my-app-backend-authentication-session-management/utils/generateToken';  //used to generate JWT tokens
import { getAllUserCourses, registerStudent, newContactMessage, registerNewCourse, getUserByUsername, getAllcourse, searchCourses} from '../models/dbmodel';
import { use } from 'react';
//TODO - work on log in, log out

//controller to get user's courses
export const getUserCourses = async (req, res) => {
    try {
        const studentID = req.body;

        const userCourses = await getAllUserCourses(studentID);
        res.status(200).json(userCourses);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch user courses'});
    }
};

export const registerStudentController = async (req, res) => {
    try {
        const {username, password, firstName, lastName, email, phone, birthday, department, program} = req.body;

        if(!username || !password || !firstName || !lastName || !email || !phone || !birthday || !department || !program) {
            return res.status(400).json({message: 'All fields are required'});
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await registerStudent(username, hashedPassword, firstName, lastName, email, phone, birthday, department, program);

        res.status(201).json({message: 'User created successfully'});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
}

//add user courses
export const registerCourse = async (req, res) => {
    try {
        const {StudentID, CourseID, Term, RegisteredAt} = req.body;

        await registerNewCourse(StudentID, CourseID, Term, RegisteredAt);

        res.status(201).json({message: 'Course registered successfully'});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to post message' });
    }
}

//send admin message
export const registerNewContactMessage = async (req, res) => {
    try {
        const {StudentID, Subject, Message, CreatedAt} = req.body;

        if(!StudentID || !Subject || !Message || !CreatedAt) {
            return res.status(400).json({message: 'All fields are required'});
        }


        await newContactMessage(StudentID, Subject, Message, CreatedAt);

        res.status(201).json({message: 'Message posted successfully'});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to post message' });
    }
}

// POST /api/auth/login
// Handles student login
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }

  try {
    const user = await getUserByUsername(username);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken({
      id: user.id,                // TODO: change to your PK column
      role: user.role || 'student',
    });

    // Save token in HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // set true in production (HTTPS)
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.json({
      message: 'Student login successful',
      user: {
        id: user.id,
        username: user.username,
        role: user.role || 'student',
      },
    });
  } catch (err) {
    console.error('loginUser error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

//get student profile
export const getProfile = async (req, res) => {
  // authMiddleware already fetched the user and attached to req.user
  res.json({ user: req.user });
};

// get all courses
export const getAllCourse = async (req, res) => {
  try {
      const courselist = await getAllcourse();

      res.status(201).json({courselist});
  }
  catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to post message' });
  }
}

//search courses
export const searchCourse = async (req, res) => {
  const {term, q} = req.body;

  try {
    const courselist = await searchCourses(term, q);

    res.status(201).json({courselist});
  }
  catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to post message' });
  }
}

//get all programs
export const getAllprogram = async (req, res) => {
  try {
      const programlist = await getAllprogram();

      res.status(201).json({programlist});
  }
  catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to post message' });
  }
}