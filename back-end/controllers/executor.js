import { client } from '../config/database.js';
import { TokenService } from '../service/token-service.js';
import { validationResult } from 'express-validator';
import dotenv from 'dotenv';
import { UserService } from '../service/executor-service.js';

dotenv.config();

export class UserController {
    static async register(req, res) {
        // POST
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            const { email, password, username, type } = req.body;
            await UserService.register(email, password, username, type)
                .then(response => res.json(response));
        } catch (err) {
            console.log(err);
            res.json({success: false, error: 'Регистрация не удалась. Проверьте введенные данные'});
        }
    }

    static async login(req, res) {
        // POST
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            await UserService.login(req.body).then(response => res.json(response));
        } catch (err) {
            console.log(err);
            res.json({success: false, error: 'Error while logging in user'});
        }
    }

    static async logout(req, res) {
        // POST
        try {
            const { refreshToken } = req.cookies;
            await TokenService.removeToken(refreshToken);
            res.clearCookie('refreshToken');
            res.json({success: true, message: 'Вы вышли из аккаунта'});
            // На стороне клиента удалять из хранилища AccessToken
        } catch (err) {
            console.log(err);
            res.json({success: false, error: 'Error while logout user'});
        }
    }

    static async refresh(req, res) {
        // Get
        try {
            const { refreshToken } = req.cookies;
            console.log('Токен обновления в cookie:', req.cookies.refreshToken);
            if(!refreshToken) {
                res.json({success: false, message: 'Токен не найден'});
                return;
            }
            const userData = await TokenService.validateRefreshToken(refreshToken);
            const tokenFromDB = await TokenService.findToken(refreshToken);
            if(!tokenFromDB || !userData) {
                return res.json({success: false, message: 'Ошибка при обновлении токена'});
            }
            const user = await client.query('select * from users where id = $1', [tokenFromDB.rows[0].user_id]);
            const tokens = TokenService.generateTokens({email: user.rows[0].email, id: user.rows[0].id, role: user.rows[0].role});
            await TokenService.saveToken(user.rows[0].id, tokens.refreshToken);
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            res.json({
                success: true, 
                message: 'Токен обновлен', 
                accessToken: tokens.accessToken
            });
        } catch (err) {
            console.log(err);
            res.json({success: false, error: 'Error while refreshing token'});
        }
    }

    static async setStudioInfo(req, res) {
        await UserService.setinfo(req.id, req.body).then(response => {
            res.json(response);
        });
    }

    static async createOrder(req, res) {
        try {
            await UserService.createOrder(req.body, req.id).then(
                response => res.json(response)
            );
        } catch (err) {
            console.log(err);
            res.json({success: false, error: 'Error while creating order'});
        }
    }
}