import {config} from 'dotenv'; //es para cargar el archivo .env

config()

export const MONGODB_URI = process.env.MONGODB_URI

export const PORT = process.env.PORT || 3000; // esta parte significa que si no existe un puerto definido que lo habra en el puerto 3000