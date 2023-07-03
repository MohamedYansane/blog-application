import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
const User = mongoose.Schema({
    avatar: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        required: [true, "field is required"]
    },
    email: {
        type: String,
        required: [true, "field is required"]
    },
    password: {
        type: String,
        required: [true, "field is required"]
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String,
        required: false
    },
    admin: {
        type: Boolean,
        default: false
    }

}, {timestamps: true});

User.methods.generateJwt = () => {
    const accessToken = jwt.sign({
        _id: this._id,
        avatar: this.avatar,
        name: this.name,
        email: this.email,
        password: this.password,
        verified: this.verified
    }, process.env.ACCESS_TOKEN, {expiresIn: "30d"});
    return accessToken;
}
export default mongoose.model("Users", User);
