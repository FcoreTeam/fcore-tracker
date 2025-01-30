import { Router } from "express";
import { body } from 'express-validator';
import { UserController } from "../controllers/executor.js";
import { MailController } from "../controllers/mail.js";
import checkAuth from "../middleware/checkAuth.js";

const router = Router();

router.post('/register',body('email', 'Некорректный email').isEmail(), 
                        body('password', 'Должен содержать минимум 8 символов').isLength({min: 8}), UserController.register);
router.post('/login', body('email', 'Некорректный email').isEmail(), UserController.login);
router.post('/logout', UserController.logout);
router.post('/activate', MailController.activate);
router.post('/send_email', MailController.send_email);
router.post('/set_studio_info', checkAuth, UserController.setStudioInfo);
router.post('/create_order', checkAuth, UserController.createOrder);

router.get('/refresh', UserController.refresh);



export default router;