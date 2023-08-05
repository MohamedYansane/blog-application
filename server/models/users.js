import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const User = mongoose.Schema(
  {
    avatar: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: [true, "field is required"],
    },
    email: {
      type: String,
      required: [true, "field is required"],
    },
    password: {
      type: String,
      required: [true, "field is required"],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      required: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// je modifie le token de generer a partir du id et nom
//si j'utilise l'arrow function avec this il n'instanciera  aucune donnée de notre
//modele à mins que je n'utilise function instead of arrow
User.methods.generateJwt = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "30d" }
  );
};

export default mongoose.model("Users", User);
