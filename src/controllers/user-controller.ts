import { Context } from 'koa';
import Controller from './controller';
import UserService from '../services/user-service';

export default class UserController implements Controller {
    private readonly userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async getUsers(context: Context): Promise<void> {
        try {
            const user = await this.userService.getUserByUsername(context.params.username);
            context.status = 200;
            context.body = user;
        } catch (e) {
            context.status = 500;
            console.error(e);
        }
    }
}
