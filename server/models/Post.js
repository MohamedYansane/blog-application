import mongoose from "mongoose";

const Post = mongoose.Schema(
  {
    title: {
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

export default mongoose.model("Posts", Post);
