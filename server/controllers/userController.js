import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import userModel from "../models/userModel";
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Field are required");
    }
// checking whether the user exists or not
    const isRegistered = await userModel.findOne({email});
    if (isRegistered) {
        res.status(400);
        throw new Error("user is already registered");
    }
// hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("here's the hashed password: " + hashedPassword);
    const user = await userModel.create({name, email, password: hashedPassword});
    if (user) { // {_id: user._id, avatar: user.avatar, email: user._email,verified: user.verified, admin:user.admin, password: hashPassword, token:null}
        res.status(201).json({
            _id: user._id,
            avatar: user.avatar,
            name: user.name,
            email: user.email,
            verified: user.verified,
            admin: user.admin,
            password: user.password,
            token: null
        });
       
    } else {
        res.status(400);
        throw new Error("user data is invalid");
    }
});
export default registerUser;
