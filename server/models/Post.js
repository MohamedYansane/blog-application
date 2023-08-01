import mongoose, { Schema } from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    //we need the slug for our article url it's must be unique
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    //Why Object cause we r using editor js and it returns an object
    body: {
      type: Object,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    // cause we wanna know which user added the post
    //with the ref we can now populate our data
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    //tags is equal to an array of string
    tags: {
      type: [String],
    },
    categories: [{ type: Schema.Types.ObjectId, ref: "PostCategories" }],
  },
  { timestamps: true }
);
// so now we gonna create a relation between our post and comment
//here we've no reference to the comment schema that's why we creating the virtual relation
//for more details see: https://mongoosejs.com/docs/tutorials/virtuals.html in Populate part
postSchema.virtual("comments", {
  //mongoDb generate _id for each schema by default the localField here
  // correspond to our PostSchema id
  localField: "_id",
  //and foreign field to the post in my comment Schema
  foreignField: "post",
});
const Post = mongoose.model("Posts", postSchema);
export default Post;
