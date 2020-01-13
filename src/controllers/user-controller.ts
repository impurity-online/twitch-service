import { Context } from 'koa';
import UserService from '../services/user-service';

export default class UserController {
    private readonly userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async getUsers(context: Context): Promise<void> {
        try {
            const user = await this.userService.getUser(context.params.username);
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
