import {Schema, model, PassportLocalSchema, PassportLocalDocument} from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

export interface User {
    username: string;
    password: string;
}

export interface UserDoc extends PassportLocalDocument{
    username: string;
    password: string;
}

const userSchema = new Schema<User>(
    {
        username: String,
        password: String,
    }, 
    { timestamps: true }
)

userSchema.plugin(passportLocalMongoose)

const UserModel = model<UserDoc>('User', userSchema as PassportLocalSchema)

export default UserModel
