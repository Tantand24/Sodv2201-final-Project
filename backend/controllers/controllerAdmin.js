import bcrypt from 'bcrypt'; //password hashing
import generateToken from '../../../my-app-backend-authentication-session-management/utils/generateToken';  //used to generate JWT tokens
import { use } from 'react';
import { getUserByUsername, getAllStudent, updateCourse, deleteCourse, getAllcourse} from '../models/dbmodel.js';
//imported from controllerUser (will update later)

/**
 * get student messages
 * sender
 * subject
 * description
 * dateSent
*/

/*
    view all students
*/
export const adminViewStudents = async (req, res) => {
  try {
    const studentsList = await getAllStudent();

    res.status(200).json(studentsList);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch students'});
  }
}

//update courses
export const adminUpdateCourse = async (req, res) => {
  try {
    const {CourseID, CourseCode, Name, Term, Description, StartDate, EndDate, ProgramCode} = req.body;

    await updateCourse(CourseID, CourseCode, Name, Term, Description, StartDate, EndDate, ProgramCode);
    
    res.status(201).json({message: 'Course updated successfully'});
  }
  catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to update course'});
  }
}

//delete courses
export const adminDeleteCourse = async (req, res) => {
  try {
    const courseCode = req.body;

    await deleteCourse(courseCode);
    
    res.status(201).json({message: 'Course deleted successfully'});
  }
  catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to delete course'});
  }
}

//load courses
export const adminViewCourses = async (req, res) => {
  try {
    const coursesList = await getAllcourse();

    res.status(200).json(coursesList);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch courses'});
  }
}

//log out

// POST /api/auth/admin/login
// Handles admin login
export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }

  try {
    const user = await getUserByUsername(username);

    // TODO: adjust 'role' check if your DB uses something like isAdmin instead
    if (!user || user.role !== 'admin') {
      return res
        .status(401)
        .json({ message: 'Invalid credentials or not an admin' });
    }

    // TODO: update 'passwordHash' to match your actual column name
    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json({
      message: 'Admin login successful',
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('loginAdmin error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};
