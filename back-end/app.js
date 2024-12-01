import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/router.js';
import { initDB } from './config/initDB.js';
import { client } from './config/database.js';


dotenv.config();


export let total_url = process.env.DEV_URL || null
const app = express();
const PORT = process.env.PORT || 3000;

initDB(client);

app.listen(PORT, () => {
  console.log(`Сервер пашет на ${PORT} порте!`);
});

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors({
  origin: process.env.CLIENT_URL, // разрешить запросы с этого домена
  credentials: true // разрешить запросы с учетными данными
}));
app.use('/api', router);