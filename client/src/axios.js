import axios from 'axios';
import dotenv from 'dotenv';
import {URLHOST} from process.env

dotenv.config();

const instance = axios.create({
    baseURL: URLHOST
});

export default instance;