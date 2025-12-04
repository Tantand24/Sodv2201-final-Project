import express from 'express';
import { loginUser } from '../controllers/controllerUser.js';
import { loginAdmin } from '../controllers/controllerAdmin.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/auth/login', loginUser);
router.post('/auth/admin/login', loginAdmin);

// Example protected route for any logged-in user
router.get('/auth/me', protect, (req, res) => {
  res.json({
    message: 'Token is valid',
    user: req.user,
  });
});

// Example admin-only route
router.get('/admin/secret', protect, adminOnly, (req, res) => {
  res.json({
    message: 'This is an admin-only route',
  });
});

export default router;
