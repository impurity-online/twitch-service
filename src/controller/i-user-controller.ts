import { Context } from 'koa';

export default interface IUserController {
    getUsers(context: Context): Promise<void>;
}
