import asyncHandler from "express-async-handler";
import Post from "../models/Post";
import Comment from "../models/Comments";
export const createComment = asyncHandler(async (req, res) => {
  //in Our comment model we dont have neither slug
  // nor post so we gonna get it from the front-end(client)
  // cause we need to know in which post we wanna add a comment
  //from we gonna find the post related to and retrieve it _id
  const { slug, desc, parent, replyOnUser } = req.body;
  const post = await Post.findOne({ slug: slug });
  if (!post) {
    res.status(401);
    throw new Error("Post was not found");
  }
  //user = req.user._id cause we r using our validateToken from our middleware
  const newComment = new Comment({
    user: req.user._id,
    desc,
    post: post._id,
    parent,
    replyOnUser,
  });
  const savedComnent = await newComment.save();
  res.status(201);
  return res.json(savedComnent);
});
