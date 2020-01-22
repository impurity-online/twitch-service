import { Context, Next } from 'koa';

export default interface IUserController {
    getUsers(context: Context, next: Next): Promise<Next>;
}
