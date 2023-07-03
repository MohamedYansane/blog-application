import express from 'express';
import {
    registerUser,
    getUsers,
    loginUser,
    userProfile,
    updateProfile,
    updateProfilePicture
} from '../controllers/usersControllers';
import {validateToken} from '../middleware/authMiddleware';
const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getUsers);
router.get('/profile', validateToken, userProfile);
router.put('/updateProfile', validateToken, updateProfile);
router.put("/updateProfilePicture", validateToken, updateProfilePicture);
export default router;
