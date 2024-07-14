import express from 'express';
import { getMenus, createMenu } from '../controller/menuController.mjs';
import { verifyToken } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.get('/', verifyToken, getMenus);
router.post('/', verifyToken, createMenu);

export default router;
