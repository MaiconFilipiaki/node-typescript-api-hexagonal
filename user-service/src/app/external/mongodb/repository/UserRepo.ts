import { log } from './../../../../config/logger';
import ApiError from '../../../exception/ApiError';
import User from '../../../interfaces/User';
import { IUserRepo } from './../../../use_cases/user/userRepoInterface';

export default class UserRepo implements IUserRepo {
    createUser(user: User): Promise<User> {
        try {
            log.info(`create user with information: ${user.toString()} `);
            return user.buildingDocMong().save()
        } catch (err) {
            throw  ApiError.internalServerError('error creating user')
        }
    }
    
}