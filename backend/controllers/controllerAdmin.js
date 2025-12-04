<<<<<<< Updated upstream
<<<<<<< Updated upstream
import bcrypt from 'bcrypt'; //password hashing
import generateToken from '../../../my-app-backend-authentication-session-management/utils/generateToken';  //used to generate JWT tokens
import { use } from 'react';
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

//update courses

//delete courses

//load courses

//log in

//log out
=======
import bcrypt from 'bcrypt';
import generateToken from '../utils/gentoken.js';
import { getUserByUsername } from '../models/dbmodel.js';

=======
import bcrypt from 'bcrypt';
import generateToken from '../utils/gentoken.js';
import { getUserByUsername } from '../models/dbmodel.js';

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
