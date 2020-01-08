import Koa from 'koa';
import dotenv from 'dotenv';
import logger from 'koa-logger';
import favicon from 'koa-favicon';
import UserController from './controllers/user-controller';
import Router from 'koa-router';

function prompt(): void {
    if (process.env.nodeEnv === 'local') {
        console.log(`Server running - http://localhost:${process.env.port}`);
    } else {
        console.log(`Server running!`);
    }
}

function start(): void {
    dotenv.config();
    const port: number = Number(process.env.port) || 8080;
    const app: Koa = new Koa();

    // Middleware
    app.use(logger());
    app.use(favicon('./public/favicon.ico'));

    // Mount
    const rootRouter = new Router();
    new UserController(rootRouter);
    app.use(rootRouter.routes());

    // Start
    app.listen(port, () => prompt());
}

start();
