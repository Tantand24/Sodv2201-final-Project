import jwt from 'jsonwebtoken';
import config from '../config/config.js';

// Protect routes: require a valid JWT token
export const protect = (req, res, next) => {
  let token = null;

  // Option 1: token stored in cookies (recommended)
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }
  // Option 2: token sent in Authorization header
  else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded; // { id, role, iat, exp }
    next();
  } catch (err) {
    console.error('JWT verify error:', err.message);
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

// Restrict route to admin users only
export const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Admin access only' });
};