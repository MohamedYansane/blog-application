import express from "express";
import { validateToken, adminGuard } from "../middleware/authMiddleware";
import { createComment } from "../controllers/commentControllers";
const router = express.Router();
router.route("/").post(validateToken, createComment);
export default router;
