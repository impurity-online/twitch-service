import User from '../model/user';

export default interface IUserService {
    getUser(username: string): Promise<User>;
}
