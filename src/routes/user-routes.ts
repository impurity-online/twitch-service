import UserController from '../controllers/user-controller';
import Router = require('koa-router');

const UserRouter = new Router();
UserRouter.get('/users/:userName', UserController.getUsers);

export { UserRouter };
