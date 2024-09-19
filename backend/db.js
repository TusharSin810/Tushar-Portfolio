import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({
    email: {type: String, unique: true},
    password: String,
    name: String,
})

export const UserModel = mongoose.model('user', User);