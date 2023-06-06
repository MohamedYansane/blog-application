import mongoose from 'mongoose';
const User = mongoose.Schema({
    avatar:{type: String, default:""},
    name:{type: String, required: [true,"field is required"]},
    email:{type: String, required: [true,"field is required"]},
    password:{type: String, required: [true,"field is required"]},
    verified: {type:Boolean, default: false},
    verificationCode:{type:String, required:false},
    admin: {type:Boolean, default: false}

},{timestamps:true});
export default mongoose.model("Users", User);