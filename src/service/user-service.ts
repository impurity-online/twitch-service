import { Types } from './../config/container-types-config';
import { inject, injectable } from 'inversify';
import IRestClient from '../client/i-rest-client';
import TwitchUserResponse from '../model/twitch-user-response';
import User from '../model/user';
import IUserService from './i-user-service';

@injectable()
export default class UserService implements IUserService {
    constructor(@inject(Types.TwitchClient) private readonly client: IRestClient) {}

    public async getUser(username: string): Promise<User> {
        return await this.client
            .get<TwitchUserResponse>(`/users`, { params: { login: username } })
            .then(response => {
                console.log('transformed response: ' + response);
                if (!response) {
                    console.log(`No data found for ${username}`, response.data);
                    return undefined;
                } else if (!response.data || response.data.length === 0) {
                    console.log(`No users found for ${username}`, response.data);
                    return undefined;
                }
                const user: User = response.data[0];
                return user;
            })
            .catch(error => {
                console.log(error);
                throw new Error(`An error occurred when getting user=${username}`);
            });
    }
}
