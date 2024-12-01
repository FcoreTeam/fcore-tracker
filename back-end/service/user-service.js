import { client } from '../config/database.js';
import bcrypt from 'bcrypt';
import { TokenService } from '../service/token-service.js';
import MailService from './mail-service.js';
import dotenv from 'dotenv';
import { insertStudio } from '../config/sqlquery.js';

dotenv.config();

export class UserService {
    static async register(email, password, username, type) {
        // POST
        try {
            const info = await client.query('select * from users where email = $1', [email]);
            if (info.rows.length != 0) {
                return {success: false, message: 'Пользователь с таким email уже существует'};
            }
            const user = await client.query('select * from users where username = $1', [username]);
            if (user.rows.length != 0) {
                return {success: false, message: 'Пользователь с таким username уже существует'};
            }
            const password_hash = await bcrypt.hash(password, 10);
            const code = Number(await UserService.generateRandomNumber());
            await client.query('insert into users (email, password_hash, username, type, code) values ($1, $2, $3, $4, $5)', [email, password_hash, username, type, code]);
            const user_info = await client.query('select id from users where email = $1', [email]);
            await client.query(insertStudio, [null,null,null,null,null,null,null, user_info.rows[0].id]);
            await MailService.sendActivationMail(email, code);
            return {success: true, message: 'Письмо для подтверждения отправлено на почту'};
        } catch (err) {
            console.log(err);
            return {success: false, error: 'Регистрация не удалась. Проверьте введенные данные'};
        }
    }

    static async login(req, res) {
        // POST
        try {
            
            const tokens = TokenService.generateTokens({email: email, id: user.rows[0].id, role: user.rows[0].role});
            await TokenService.saveToken(user.rows[0].id, tokens.refreshToken);
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            
        } catch (err) {
            console.log(err);
            res.json({success: false, error: 'Error while logging in user'});
        }
    }

    static async generateRandomNumber() {
        let randomNumber = '';
        for (let i = 0; i < 5; i++) {
            randomNumber += Math.floor(Math.random() * 10); // Генерация случайной цифры от 0 до 9
        }
        return randomNumber;
    }
}