import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import User from "../models/users";
import jwt from "jsonwebtoken";
import { uploadPicture } from "../middleware/uploadPictureMiddleware";
import { fileRemove } from "../utils/fileRemove";

// if i didn't use asyncHandler in the catch block
// i must add next as an argument and in the catch
// call him by passing the error next(error);
// so the handleBlog middleware will triggered dont forget
// to create it inside the server
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
    const _user = await User.create({name, email, password: hashedPassword});
    const accessToken = jwt.sign({
        _id: _user._id,
        avatar: _user.avatar,
        name: _user.name,
        email: _user.email,
        password: _user.password,
        verified: _user.verified
    }, process.env.ACCESS_TOKEN, {expiresIn: "30d"});

    if (_user) {
        res.status(201).json({
            _id: _user._id,
            avatar: _user.avatar,
            name: _user.name,
            email: _user.email,
            password: _user.password,
            verified: _user.verified,
            token: await _user.generateJwt()
        });
    } else {
        res.status(400);
        throw new Error("Data is invalid");
    }
});
// @desc login user
// @router GET /api/users/login
// @access public
export const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All field are required");
    }
    const _user = await User.findOne({email});
    if (_user && (await bcrypt.compare(password, _user.password))) {
        const acessToken = jwt.sign({
            user: {
                _id: _user._id,
                avatar: _user.avatar,
                name: _user.name,
                email: _user.email,
                admin: _user.admin
            }
        }, process.env.ACCESS_TOKEN, {expiresIn: "15m"});
/* res.status(201).json({
            _id: _user._id,
            avatar: _user.avatar,
            name: _user.name,
            email: _user.email,
            password: _user.password,
            verified: _user.verified,
            token: accessToken
        }); */
        res.status(201).json(acessToken);
    } else {
        res.status(401);
        throw new Error("Email or password is incorrect");
    }

});
// @desc user profile
// @router GET /api/users/profile
// @access private
export const userProfile = asyncHandler(async (req, res) => {

    let _user = await User.findById(req.user._id).select("-password");
    if (_user) {

        res.status(201).json(_user);

    } else {
        res.status(401);
        throw new Error("user not found user profile");
    }
});
export const updateProfile = asyncHandler(async (req, res) => {
// the user we catch when he logged in authMiddleware
// and the user object of access token in loginUser controller
    let user = await User.findById(req.user._id);
    if (! user) {
        res.status(401);
        throw new Error("User not found");
    }
// update user if it's defined it will be equal to req.body. or
// it will be equal to the existing attributs
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password && req.body.password.length < 6) {
        res.status(400);
        throw new Error("Length of password must be at least 6 characters");
    } else if (req.body.password) { // if it's true
        user.password = await bcrypt.hash(req.body.password, 10);
    }
    const updateUserProfile = await user.save();
    
// to be able to upload a pictur o our server
// we 've to install multer package
// Multer is a node.js middleware for handling multipart/form-data,
// which is primarily used for uploading files.
// It is written on top of busboy for maximum efficiency
// res.status(201).json(updateUserProfile);
    res.status(201).json({
        _id: updateUserProfile._id,
        avatar: updateUserProfile.avatar,
        name: updateUserProfile.name,
        email: updateUserProfile.email,
        password: updateUserProfile.password,
        verified: updateUserProfile.verified,
        token: await updateUserProfile.generateJwt()
    });

});
export const updateProfilePicture = asyncHandler(async (req, res, next) => {
    //later we wanna set our profile name whenever we're sending our upload to the api
    const upload = uploadPicture.single('profilePicture');
    upload(req, res, async (err) =>{
        if(err)
        {
            //  si j'utilise res.status() and throw new error it wont work
            const error = new Error(`An unknown error occurred while uploading the profile picture, ${err.message}`);
            next(error);
            // i got tis error "message": "An unknown error occurred while uploading the profile picture Unexpected field",
            // when i sen my request with put to  resolve that i've 
            // to pass my ProfilePicture as a key cause its my field name
        }else{
            //if everything is ok 

            if(req.file)
            {
                // req.file.filename we r getting this from our upload function
                // and we've to consider it as a middleware
                const updateUser = await User.findByIdAndUpdate(req.user._id,{
                    avatar:req.file.filename,
                },{new:true});
                res.status(201).json({
                    _id: updateUser._id,
                    avatar: updateUser.avatar,
                    name: updateUser.name,
                    email: updateUser.email,
                    password: updateUser.password,
                    verified: updateUser.verified,
                    token: await updateUser.generateJwt()
                });
              
            }
            else{
                // it will be the helper variable for us
                let filename;
                let _user = await User.findById(req.user._id);
                filename = _user.avatar;
                //so if there's no  file in profilePicture field
                // i wanna set the value of avatar by default as an empty string
                _user.avatar = "";
                //then make changes
                await _user.save();
                //after we wanna remove the file in our uploads
                //folder let's go inside our utils folder
                fileRemove(filename);
                res.status(201).json({
                    _id: _user._id,
                    avatar: _user.avatar,
                    name: _user.name,
                    email: _user.email,
                    password: _user.password,
                    verified: _user.verified,
                    token: _user.generateJwt()
                });
            }
        }
    }) 
});
