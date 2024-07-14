import express from 'express';
import { getUsers, assignRoleToUser } from '../controller/userController.mjs';
import authMiddleware from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.get('/', authMiddleware, getUsers);
router.put('/:userId/role', authMiddleware, assignRoleToUser);

export default router;
