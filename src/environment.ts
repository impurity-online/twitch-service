import dotenv from 'dotenv';
dotenv.config();

interface IEnvironment {
    environment: string | undefined;
    port: string | undefined;
}

export default {
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
} as IEnvironment;
