<<<<<<< Updated upstream
<<<<<<< Updated upstream
import bcrypt from 'bcrypt'; //password hashing
import generateToken from '../../../my-app-backend-authentication-session-management/utils/generateToken';  //used to generate JWT tokens
import { getAllUserCourses, registerUser} from '../models/dbmodel';
import { use } from 'react';

//controller to get user's courses
export const getUserCourses = async (requestAnimationFrame, res) => {
    try {
        const username = req.body;

        const userCourses = await getAllUserCourses(username);
        res.status(200).json(userCourses);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch user courses'});
    }
};

export const registerUserController = async (req, res) => {
    try {
        const {username, password, firstName, lastName, email, phone, birthday, department, program} = req.body;

        if(!username || !password || !firstName || !lastName || !email || !phone || !birthday || !department || !program) {
            return res.status(400).json({message: 'All fields are required'});
        }

        // const hashedPassword = await bcrypt.hash(password, 10)   //later use

        await registerUser(username, password, firstName, lastName, email, phone, birthday, department, program);

        res.status(201).json({message: 'User created successfully'});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
}

//add user courses

//send admin message

//log in

//log out
=======
=======
>>>>>>> Stashed changes
import bcrypt from 'bcrypt';
import generateToken from '../utils/gentoken.js';
import { getUserByUsername } from '../models/dbmodel.js';

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

    // TODO: update 'passwordHash' to match your actual column name
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
