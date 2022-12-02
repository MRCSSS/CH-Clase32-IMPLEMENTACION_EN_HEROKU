/* ---------------------------- MODULOS -----------------------------*/
import * as dotenv from 'dotenv';
import winston from 'winston';

dotenv.config();

/* ------------------- OBJETO CONFIGURADOR DE DB -------------------- */
const config = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    secretKey: process.env.SECRET_KEY,
    dbType: process.env.DB_TYPE,
    mongoURL: process.env.MONGO_URL,
    fileSystemPath: process.env.FILESYSTEM_PATH,
};
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({level: 'info'}),
        new winston.transports.File({ filename: 'logs/warn.log' ,level: 'warn'}),
        new winston.transports.File({ filename: 'logs/error.log' ,level: 'error'}),
    ]
});

export {config,logger};
