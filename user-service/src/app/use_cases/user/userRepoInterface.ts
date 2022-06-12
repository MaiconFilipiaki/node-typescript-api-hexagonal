import User from "../../interfaces/User";

export interface IUserRepo {
    createUser(user: User): Promise<User>
}