import { Types } from './../config/container-types-config';
import { Context, Next } from 'koa';

import User from '../model/user';
import IUserService from '../service/i-user-service';
import IUserController from './i-user-controller';
import { inject } from 'inversify';
import Controller from './controller';

export default class UserController extends Controller implements IUserController {
    constructor(@inject(Types.UserService) private readonly userService: IUserService) {
        super();
    }

    public async getUsers(context: Context, next: Next): Promise<Next> {
        const username: string = context.params.username;
        if (!username) {
            return this.response(context, next, 400, 'Username is required');
        }
        try {
            const user: User = await this.userService.getUser(username);
            if (user) {
                return this.response(context, next, 200, JSON.stringify(user));
            }
            return this.response(context, next, 404, `Username ${username} was not found`);
        } catch (e) {
            console.error(`Could not complete get user with username ${username} - ${e}`);
            return this.response(context, next, 500, `Username ${username} caused an internal server error`);
        }
    }
}
