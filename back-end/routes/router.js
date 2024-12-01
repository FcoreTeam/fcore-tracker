import { Router } from "express";
import { body } from 'express-validator';
import { UserController } from "../controllers/user.js";

const router = Router();

// Register routes
router.post('/register',body('email', 'Некорректный email').isEmail(), 
                        body('password', 'Должен содержать минимум 8 символов').isLength({min: 8}), UserController.register);
router.post('/login', body('email', 'Некорректный email').isEmail(), UserController.login);
router.post('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);
router.post('/activate', UserController.activate);



export default router;