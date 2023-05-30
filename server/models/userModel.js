import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    avatar :{type:"String", default:""},
    name :{type:"String", required:["true","field is required"]},
    email :{type:"String", required:["true","field is required"]},
    password :{type:"String", required:["true","field is required"]},
    verified: {type:"Boolean", default:false},
    verificationCode:{type:"String", required:false},
    admin:{type:"Boolean", required:false}
},
{timestamps:true})
module.exports = mongoose.model('User', userSchema);