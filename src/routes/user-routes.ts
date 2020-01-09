import Router from 'koa-router';
import UserController from '../controllers/user-controller';

export default class UserRoutes {
    public static mount(rootRouter: Router, userController: UserController): void {
        rootRouter.get('/:username', context => userController.getUsers(context));
        rootRouter.use('/users', rootRouter.routes());
    }
}
