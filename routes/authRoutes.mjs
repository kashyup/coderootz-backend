import express from 'express';
import { signup, login, getUser } from '../controller/authController.mjs';
import authMiddleware from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', authMiddleware, getUser);

export default router;
