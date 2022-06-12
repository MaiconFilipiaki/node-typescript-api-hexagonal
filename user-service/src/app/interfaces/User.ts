import { UserModel } from "../external/mongodb/schemas/UserDoc";

export default class User {
    name: string;
    country: string;
    _hash: string;

    constructor(name: string, country: string) {
        this.name = name;
        this.country = country;
        this._hash = 'asdasdasdsad';
    }

    buildingDocMong() {
        const newUser = new UserModel({
            name: this.name,
            country: this.country,
            _hash: this._hash
        })
        return newUser;
    }

    toString() {
        return JSON.stringify({name: this.name, country: this.country})
    }
}