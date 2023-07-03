import express from "express";
import registerUser from "../controllers/userController";

const router = express.Router();

/*router.route('/').get(getUsers).post(registerUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);*/
router.route('/register').post(registerUser);
module.exports = router;