import { client } from '../config/database.js';
import bcrypt from 'bcrypt';
import { TokenService } from '../service/token-service.js';
import MailService from './mail-service.js';
import dotenv from 'dotenv';
import NodeCache from 'node-cache';

dotenv.config();
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

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
            await client.query('insert into users (email, password_hash, username, type) values ($1, $2, $3, $4)', [email, password_hash, username, type]);
            return {success: true, message: 'Регистрация прошла успешно'};
        } catch (err) {
            console.log(err);
            return {success: false, error: 'Регистрация не удалась. Проверьте введенные данные'};
        }
    }

    static async activate(code, email) {
        try {
            const fet_code = myCache.get(email);
            const user = await client.query('select * from users where email = $1', [email]);
            if (user.rows.length == 0) {
                return {success: false, message: 'Пользователь не найден'};
            }
            if (fet_code != code) {
                await myCache.del(email);
                return {success: false, message: 'Неверный код активации'};
            }
            await client.query('update users set is_active = true where email = $1', [email]);
            const tokens = TokenService.generateTokens({email: email, id: user.rows[0].id});
            await TokenService.saveToken(user.rows[0].id, tokens.refreshToken);
            return {success: true, message: 'Пользователь активирован', tokens: tokens};
        } catch (err) {
            console.log(err);
            return {success: false, message: 'Error while activating user'};
        }
    }

    static async send_email(email) {
        try {
            const code = Number(await UserService.generateRandomNumber());
            if(myCache.has(email)) {
                await myCache.del(email);
            }
            myCache.set(email, code);
            await MailService.sendActivationMail(email, code);
            return {success: true, message: 'Письмо для подтверждения отправлено на почту'};
        } catch (err) {
            console.log(err);
            return {success: false, error: 'Error while activating user'};
        }
    }

    static async login(info) {
        // POST
        try {
            const user = await client.query('select * from users where email = $1', [info.email]);
            if (user.rows.length == 0) {
                return {success: false, message: 'Пользователь не найден'};
            }
            if (user.rows[0].is_active == false) {
                return {success: false, message: 'Пользователь не активирован. Чтобы войти активируйте аккаунта!'};
            }
            if(user.rows[0].twofa == false) {
                const isPassValid = await bcrypt.compare(info.password, user.rows[0].password_hash);
                if(!isPassValid) {
                    return {success: false, message: 'Неверный логин или пароль'};
                }
                const tokens = TokenService.generateTokens({email: info.email, id: user.rows[0].id});
                await TokenService.saveToken(user.rows[0].id, tokens.refreshToken);
                return {success: true, message: 'Вход выполнен', tokens: tokens};
            }    
            const code = Number(await UserService.generateRandomNumber());
            if(myCache.has(info.email)) {
                await myCache.del(info.email);
            }
            myCache.set(info.email, code);
            await MailService.sendConfirmMail(info.email, code);
            return {success: true, message: 'Письмо для подтверждения отправлено на почту'};
        } catch (err) {
            console.log(err);
            res.json({success: false, error: 'Error while logging in user'});
        }
    }

    static async generateRandomNumber() {
        return Math.floor(10000 + Math.random() * 90000);
    }

    static async setinfo(id, info) {
        try {
            const studio = await client.query('select * from studios where studio_id = $1', [id]);
            if (studio.rows.length != 0) {
                return {success: false, message: 'У пользователя уже есть студия'};
            }
            const user = await client.query('select * from users where id = $1', [id]);
            if(user.rows[0].type == 'notregister') {
                await client.query('insert into studios (studio_id, fname, lname, mname, about, sphere_of_activity, phone, inn) values ($1, $2, $3, $4, $5, $6, $7, $8)', [id, info.fname, info.lname, info.mname, info.about, info.sphere_of_activity, info.phone, info.inn]);
                await client.query('insert into card_details (card_number, card_fname, card_lname, user_id, bank_id) values ($1, $2, $3, $4, $5)', [info.card_number, info.card_fname, info.card_lname, id, info.bank_id]);
                return {success: true, message: 'Студия для пользователя создана (Незарегистрированный пользователь)'};
            } else {
                await client.query('insert into studios (studio_id, fname, lname, mname, inn, about, sphere_of_activity, phone) values ($1, $2, $3, $4, $5, $6, $7, $8)', [id, info.fname, info.lname, info.mname, info.inn, info.about, info.sphere_of_activity, info.phone]);
                await client.query('insert into card_details (card_number, card_fname, card_lname, user_id, bank_id) values ($1, $2, $3, $4, $5)', [info.card_number, info.card_fname, info.card_lname, id, info.bank_id]);
                return {success: true, message: 'Студия для пользователя создана (Самозанятый пользователь)'};
            }
        } catch (err) {
            console.log(err);
            return {success: false, error: 'Error while setting user info'};
        }
    }

    static async createOrder(info) {
        try {
            
        } catch (err) {
            console.log(err);
            res.json({success: false, error: 'Error while creating order'});
        }
    }
}