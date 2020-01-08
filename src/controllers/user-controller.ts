import { Context } from 'koa';
import Router = require('koa-router');
import Controller from './controller';

export default class UserController implements Controller {
    constructor(rootRouter: Router) {
        this.mount(rootRouter);
    }

    public async getUsers(context: Context): Promise<void> {
        context.status = 200;
        context.body = 'Hello World!';
    }

    public mount(rootRouter: Router): void {
        rootRouter.get('/:userName', this.getUsers);
        rootRouter.use('/users', rootRouter.routes());
    }
}
