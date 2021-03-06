import { Types } from './config/container-types-config';
import dotenv from 'dotenv';
import Koa from 'koa';
import favicon from 'koa-favicon';
import logger from 'koa-logger';
import Router from 'koa-router';

import UserRoutes from './route/user-routes';
import container from './config/container-config';
import IUserController from './controller/i-user-controller';

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
    UserRoutes.mount(rootRouter, container.get(Types.UserController) as IUserController);

    app.use(rootRouter.routes());

    // Start
    app.listen(port, () => prompt());
}

start();
