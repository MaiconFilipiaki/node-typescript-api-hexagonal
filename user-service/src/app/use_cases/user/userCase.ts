import e from "express";
import ApiError from "../../exception/ApiError";
import User from "../../interfaces/User";
import { IUserRepo } from "./userRepoInterface";

export default class {

    private _userRepo: IUserRepo;

    constructor(userRepo: IUserRepo) {
        this._userRepo = userRepo;
    }

    async createUserUseCase(user: User) {
        try {
            if (user.country !== "Brasil") {
                throw new Error(ApiError.COUNTRY_BE_MUST_BRASIL);
            }
            return await this._userRepo.createUser(user);
        } catch (error) {
            throw ApiError.roleBusiness(error.message);
        }
    }   
    
}
