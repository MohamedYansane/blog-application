import mongoose from "mongoose";
const postCategoriesSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);
const PostCategories = mongoose.model("PostCategories", postCategoriesSchema);
export default PostCategories;
