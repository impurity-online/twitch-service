import { Context } from 'koa';

export default class UserController {
    public static async getUsers(context: Context): Promise<void> {
        context.status = 200;
        context.body = 'Hello World!';
    }
}
