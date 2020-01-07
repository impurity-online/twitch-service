import Koa from 'koa';
import dotenv from 'dotenv';
import { UserRouter } from './routes/user-routes';

function prompt(): void {
    if (process.env.nodeEnv === 'local') {
        console.log(`Server running - https://localhost:${process.env.port}`);
    } else {
        console.log(`Server running!`);
    }
}

function start(): void {
    dotenv.config();
    const port: number = Number(process.env.port) || 8080;
    const app: Koa = new Koa();

    app.use(UserRouter.routes());

    app.listen(port, () => prompt());
}

start();
