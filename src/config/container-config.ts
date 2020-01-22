import { Types } from './container-types-config';
import 'reflect-metadata';
import { Container } from 'inversify';
import UserController from '../controller/user-controller';
import IUserController from '../controller/i-user-controller';
import IUserService from '../service/i-user-service';
import UserService from '../service/user-service';
import TwitchClient from '../client/twitch-client';
import IRestClient from '../client/i-rest-client';
import TwitchClientConfig from './twitch-client-config';

const container: Container = new Container();

container.bind<IUserController>(Types.UserController).to(UserController);
container.bind<IUserService>(Types.UserService).to(UserService);
container.bind<TwitchClientConfig>(Types.TwitchClientConfig).to(TwitchClientConfig);
container.bind<IRestClient>(Types.TwitchClient).to(TwitchClient);

export default container;
