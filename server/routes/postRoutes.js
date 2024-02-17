import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
  getPost,
} from "../controllers/postControllers";
import { validateToken, adminGuard } from "../middleware/authMiddleware";
const router = express.Router();
//so after checking the token it will then check the admin guard
router
  .route("/")
  .post(validateToken, adminGuard, createPost)
  .get(validateToken, adminGuard, getPosts);
router
  .route("/:slug")
  .put(validateToken, adminGuard, updatePost)
  .delete(validateToken, adminGuard, deletePost)
  .get(getPost);
//for the getPost its like get articles
// we don't need user to be authentified
//to see posts
export default router;
