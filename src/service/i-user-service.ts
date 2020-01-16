import User from '../model/user';

export default interface UserServiceInterface {
    getUser(username: string): Promise<User>;
}
