import express from 'express';
import { createRole, updateRole, getRoles, getMenus } from '../controller/roleController.mjs';
import authMiddleware from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/', authMiddleware, createRole);
router.put('/:roleId', authMiddleware, updateRole);
router.get('/', authMiddleware, getRoles);
router.get('/menus', authMiddleware, getMenus);

export default router;
