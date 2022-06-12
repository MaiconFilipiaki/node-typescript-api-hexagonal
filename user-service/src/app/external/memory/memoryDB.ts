import { IUserRepo } from './../../use_cases/user/userRepoInterface';
import User from "../../interfaces/User";

const data: User[] = []

export default class MemoryDB implements IUserRepo {
    async createUser(user: User): Promise<User> {
        await data.push(user)
        console.log(data)
        return user;
    }

}
