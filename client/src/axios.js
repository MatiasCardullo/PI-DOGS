import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const {URLHOST}=process.env

const instance = axios.create({
    baseURL: URLHOST|| "http://localhost:3001"
});

export default instance;