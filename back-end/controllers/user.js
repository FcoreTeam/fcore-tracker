import { client } from '../config/database.js';
import { TokenService } from '../service/token-service.js';
import { validationResult } from 'express-validator';
import dotenv from 'dotenv';
import { UserService } from '../service/user-service.js';

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

    static async activate(req, res) {
        // GET
        try {
            const { code, email } = req.body;
            const info = await client.query('select * from users where email = $1', [email]);
            if (info.rows.length == 0) {
                return res.json({success: false, message: 'Пользователь не найден'});
            }
            if (info.rows[0].isactivatedemail) {
                return res.json({success: false, message: 'Пользователь уже активирован'});
            }
            if (info.rows[0].code != code) {
                return res.json({success: false, message: 'Неверный код активации'});
            }
            client.query('update users set isActivatedEmail = true where code = $1', [code]);
            res.json({success: true, message: 'Пользователь активирован'});
        } catch (err) {
            console.log(err);
            res.json({success: false, error: 'Error while activating user'});        
        }
    }
}