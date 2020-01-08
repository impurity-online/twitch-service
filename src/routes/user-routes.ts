import UserController from '../controllers/user-controller';
import Router from 'koa-router';

export default class UserRoutes {
    public static mount(rootRouter: Router, userController: UserController): void {
        rootRouter.get('/:username', context => userController.getUsers(context));
        rootRouter.use('/users', rootRouter.routes());
    }
}
