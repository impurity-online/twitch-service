import User from '../models/user';

export default interface UserServiceInterface {
    getUser(username: string): Promise<User>;
}
