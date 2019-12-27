import dotenv from 'dotenv';
dotenv.config();

export function getEnvironment(key: string, fallback?: string): string {
    const value: string | undefined = process.env[key];
    if (value) {
        return value;
    } else if (fallback) {
        console.warn(`No environment variable ${key} found. Using ${fallback} instead`);
        return fallback;
    } else {
        throw new Error(`No environment variable ${key} found and no explicit fallback supplied!`);
    }
}

interface IEnvironment {
    nodeEnv: string;
    port: string;
}

const environment: IEnvironment = {
    nodeEnv: getEnvironment('NODE_ENV', 'local'),
    port: getEnvironment('PORT', '8080'),
};

export default environment;
