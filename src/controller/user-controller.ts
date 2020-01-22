import { Types } from './../config/container-types-config';
import { Context } from 'koa';

import User from '../model/user';
import IUserService from '../service/i-user-service';
import IUserController from './i-user-controller';
import { injectable, inject } from 'inversify';

@injectable()
export default class UserController implements IUserController {
    constructor(@inject(Types.UserService) private readonly userService: IUserService) {}

    public async getUsers(context: Context): Promise<void> {
        try {
            const user: User = await this.userService.getUser(context.params.username);
            if (user) {
                context.status = 200;
                context.body = user;
            } else {
                context.status = 404;
                context.body = user;
            }
        } catch (e) {
            context.status = 500;
            console.error(e);
        }
    }
}
