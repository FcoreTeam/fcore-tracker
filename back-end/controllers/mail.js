import { client } from '../config/database.js';
import { TokenService } from '../service/token-service.js';
import MailService from '../service/mail-service.js';
import myCache from '../service/executor-service.js';
import dotenv from 'dotenv';

dotenv.config();


export class MailController {
    static async activate(req, res) {
            try {
                const {email, code} = req.body;
                const fet_code = await myCache.get(email);
                const user = await client.query('select * from users where email = $1', [email]);
                if (user.rows.length == 0) {
                    return res.json({success: false, message: 'Пользователь не найден'});
                }
                if (fet_code != code) {
                    await myCache.del(email);
                    return res.json({success: false, message: 'Неверный код активации'});
                }
                await client.query('update users set is_active = true where email = $1', [email]);
                const tokens = TokenService.generateTokens({email: email, id: user.rows[0].id});
                await TokenService.saveToken(user.rows[0].id, tokens.refreshToken);
                return res.json({success: true, message: 'Пользователь активирован', tokens: tokens});
            } catch (err) {
                console.error(err);
                return res.json({success: false, message: 'Error while activating user'});
            }
    }
    
    static async send_email(req, res) {
            try {
                const {email} = req.body;
                const code = Number(await MailController.generateRandomNumber());
                if(myCache.has(email)) {
                    await myCache.del(email);
                }
                await myCache.set(email, code);
                await MailService.sendActivationMail(email, code);
                return res.json({success: true, message: 'Письмо для подтверждения отправлено на почту'});
            } catch (err) {
                console.error(err);
                return res.json({success: false, error: 'Error while activating user'});
            }
    }

    static async generateRandomNumber() {
            return Math.floor(10000 + Math.random() * 90000);
    }
}