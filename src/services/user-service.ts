import Service from './service';

export default class UserService extends Service {
    public async getUserByUsername(username: string): Promise<string> {
        return `Got user=${username}`;
    }
}
