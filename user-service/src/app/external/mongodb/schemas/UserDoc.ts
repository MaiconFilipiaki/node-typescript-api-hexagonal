import { Schema, model } from "mongoose";
import User from "../../../interfaces/User";

const userSchema = new Schema<User>({
    name: {type: String, required: true},
    country: {type: String, required: true},
    _hash: {type: String, required: true}
})

const UserModel = model<User>('User', userSchema)

export {UserModel}