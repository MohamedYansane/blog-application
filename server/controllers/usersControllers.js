import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import User from "../models/users";

export const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});
export const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Fields are required");
    }
// check if the user already exists
    const findUser = await User.findOne({email: email});
    if (findUser) {
        res.status(400);
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({name, email, password: hashedPassword});
    if (user) {
        res.status(201).json({
            _id: user._id,
            avatar: user.avatar,
            name: user.name,
            email: user.email,
            password: user.password,
            verified: user.verified,
            verificationCode: user.verificationCode,
            token: null
        });
    } else {
        res.status(400);
        throw new Error("Data is invalid");
    }
});
