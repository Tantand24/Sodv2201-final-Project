import express from 'express';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import { adminDeleteCourse, adminUpdateCourse, adminViewContactMessages, adminViewCourses, adminViewStudents, loginAdmin } from '../controllers/controllerAdmin.js';
import { getAllCourse, getAllprogram, getProfile, getUserCourses, loginUser, registerCourse, registerNewContactMessage, registerStudentController, searchCourse } from '../controllers/controllerUser.js';

const router = express.Router();

// Public routes
router.post('/auth/signup', registerStudentController);
router.post('/auth/login', loginUser);
router.post('/auth/admin/login', loginAdmin)
router.get('/programs', getAllprogram);
router.get('/courses', getAllCourse);
router.get('/courses/search', searchCourse);

// Student protected routes
router.get('/me', protect, getProfile);
router.post('/registrations', protect, registerCourse);
router.get('/registrations', protect, getUserCourses);
router.post('/contact', protect, registerNewContactMessage);

// Admin protected routes
router.post('/admin/courses', protect, adminOnly, adminViewCourses);
router.put('/admin/courses/:id', protect, adminOnly, adminUpdateCourse);
router.delete('/admin/courses/:id', protect, adminOnly, adminDeleteCourse);
router.get('/admin/studentlist', protect, adminOnly, adminViewStudents);
router.get('/admin/messages', protect, adminOnly, adminViewContactMessages);

export default router;
