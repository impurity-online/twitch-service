import TwitchClient from '../client/twitch-client';
import TwitchUserResponse from '../model/twitch-user-response';
import User from '../model/user';
import UserServiceInterface from './i-user-service';

export default class UserService implements UserServiceInterface {
    private readonly twitchClient: TwitchClient;

    constructor() {
        this.twitchClient = new TwitchClient();
    }

    public async getUser(username: string): Promise<User> {
        return await this.twitchClient
            .get<TwitchUserResponse>(`/users`, { params: { login: username } })
            .then(response => {
                const dataResponse = response;
                if (!dataResponse) {
                    console.log(`No data found for ${username}`, response.data);
                    return undefined;
                } else if (!dataResponse.data || dataResponse.length === 0) {
                    console.log(`No users found for ${username}`, response.data);
                    return undefined;
                }
                const user: User = dataResponse.data[0];
                return user;
            })
            .catch(error => {
                console.log(error);
                throw new Error(`An error occurred when getting user=${username}`);
            });
    }
}
