import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import { uploadPicture } from "../middleware/uploadPictureMiddleware";
import { fileRemove } from "../utils/fileRemove";
import Post from "../models/Post";
import { v4 as uuidv4 } from "uuid";
import Comment from "../models/Comments";
// if i didn't use asyncHandler in the catch block
// i must add next as an argument and in the catch
// call him by passing the error next(error);
// so the handleBlog middleware will triggered dont forget
// to create it inside the server
export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

// @desc createPost
// @router POST /api/posts/
// @access private
//for the id generator i'm gonna use uuid let install the
//dependency npm i uuid
export const createPost = asyncHandler(async (req, res) => {
  const post = new Post({
    title: "Sample Tiltle",
    caption: req.body.caption || "",
    slug: uuidv4(),
    body: {
      type: "doc",
      content: [],
    },
    photo: "",
    //this user is from our auth middleware.
    user: req.user._id,
  });
  const createdPost = await post.save();
  return res.json(createdPost);
});

export const updatePost = asyncHandler(async (req, res) => {
  //i wanna find a post by it's slug cause it unique
  const post = await Post.findOne({ slug: req.params.slug });
  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }
  const upload = uploadPicture.single("postPicture");
  const handleUpdatePostData = async (data) => {
    const { title, caption, slug, body, tags, categories } = JSON.parse(data);
    //if there's data update else maintient l'ancienne valeur
    post.title = title || post.title;
    post.caption = caption || post.caption;
    post.slug = slug || post.slug;
    post.body = body || post.body;
    post.tags = tags || post.tags;
    post.categories = categories || post.categories;
    //we save our document
    const updatePost = await post.save();
    res.status(201);
    return res.json(updatePost);
  };
  upload(req, res, async (err) => {
    if (err) {
      //  si j'utilise res.status() and throw new error it wont work
      const error = new Error(
        `An unknown error occurred while uploading the profile picture, ${err.message}`
      );
      next(error);
      // i got tis error "message": "An unknown error occurred while uploading the post picture Unexpected field",
      // when i sen my request with put to  resolve that i've
      // to pass my PostPicture as a key cause its my field name
    } else {
      if (req.file) {
        let fileName;
        fileName = post.photo;
        if (fileName) {
          fileRemove(fileName);
        }
        //then i'm gonna update the post photo
        post.photo = req.file.filename;
        //the server wasn't given any response cause we didn't call the function

        handleUpdatePostData(req.body.document);
        //notice we cant access this document outside of this function
      } else {
        // it will be the helper variable for us
        let filename;
        filename = post.photo;
        //so if there's no  file in postPicture field
        // i wanna set the value of photo by default as an empty string
        post.photo = "";
        //after we wanna remove the file in our uploads
        //folder let's go inside our utils folder
        fileRemove(filename);
        handleUpdatePostData(req.body.document);
      }
    }
  });
});
export const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findOneAndDelete({ slug: req.params.slug });
  if (!post) {
    res.status(401);
    throw new Error("Post was not found");
  }
  //then after deleting the post i want to delete also the
  //comments related to that post
  await Comment.deleteMany({ post: post._id });
  return res.json({ message: "Post deleted successfully" });
});
export const getPost = asyncHandler(async () => {});
