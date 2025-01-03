import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config();

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });
    }

    async sendActivationMail(to, code) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: to,
            subject: 'Активация аккаунта на сайте Fcore-tracker',
            text: '',
            html: `
                <div>
                    <h1>Для активации введите следующий код</h1>
                    <p>Ваш код активации: ${code}</p>
                </div>
            `
        })
    }

    async sendConfirmMail(to, code) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: to,
            subject: 'Вход на сайте Fcore-tracker',
            text: '',
            html: `
                <div>
                    <h1>Для входа в аккаунт введите следующий код</h1>
                    <p>Ваш код активации: ${code}</p>
                </div>
            `
        })
    }
}

export default new MailService();