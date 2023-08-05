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
  .get(validateToken, adminGuard, getPost);

export default router;
