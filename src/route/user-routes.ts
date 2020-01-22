import Router from 'koa-router';

import IUserController from '../controller/i-user-controller';

export default class UserRoutes {
    public static mount(rootRouter: Router, userController: IUserController): void {
        rootRouter.get('/:username', context => userController.getUsers(context));
        rootRouter.use('/users', rootRouter.routes());
    }
}
