import jwt from 'jsonwebtoken';
import config from '../config/config.js';

// Generates a JWT token for a user object.
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,        // e.g. studentId / userId
      role: user.role,    // 'student' or 'admin'
    },
    config.jwtSecret,
    {
      expiresIn: config.jwtExpiresIn,
    },
  );
};

export default generateToken;