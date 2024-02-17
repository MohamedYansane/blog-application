import mongoose, { Schema } from "mongoose";
const commentSchema = mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    desc: { type: String, required: true },
    //here we r getting the post id so that we'll know which post the user commented
    post: { type: Schema.Types.ObjectId, required: true, ref: "Posts" },
    // so i'm adding this property cause i've to accept the comment to be added
    //so that i can avoid comment with insult or qui
    //incite à la violence and bully
    check: { type: Boolean, default: false },
    //due to this attribut we'll know
    // if the comment is the parent comment or child
    //the default is null cause by default each comment
    //is considered as a main comment
    parent: {
      type: Schema.Types.ObjectId,

      ref: "Comments",
      default: null,
    },
    //with this attribute we  can fetch the user data who replied to this comment
    replyOnUser: { type: Schema.Types.ObjectId, ref: "Users", default: null },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
// so now we gonna create a relation for a comment itself
// wer  creating a virtual relation
//for more details see: https://mongoosejs.com/docs/tutorials/virtuals.html in Populate part
//so here i wanna get replies comment for the main comment
commentSchema.virtual("replies", {
  ref: "Comments",
  localField: "_id",
  foreignField: "parent",
});
const Comment = mongoose.model("Comments", commentSchema);
export default Comment;
