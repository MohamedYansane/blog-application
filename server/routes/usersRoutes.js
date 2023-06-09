import express from 'express';
import {registerUser, getUsers, loginUser, userProfile} from '../controllers/usersControllers';
import {validateToken} from '../middleware/authMiddleware';
const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getUsers);
router.get('/profile', validateToken, userProfile);
export default router;
