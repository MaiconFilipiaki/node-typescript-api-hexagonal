import User from '../../../interfaces/User';
import { IUserRepo } from './../userRepoInterface';

export default class UserRepoMock implements IUserRepo {

    private user: User[] = [];

    createUser(user: User): Promise<User> {
        this.user.push(user);
        return Promise.resolve(user);
    }
}