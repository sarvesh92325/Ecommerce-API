// Packages
import express from 'express';

// Middlewares
import protect from '../middlewares/protect';
import restrictedTo from '../middlewares/restrictedTo';
// Controllers
import {
  createUser,
  getUsers,
  getUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser
} from '../controllers/user.controller';

// Utils
import { singleFile } from '../utils/multer';

// Router Initialization
const router = express.Router();

// Get All Users Route
router.get('/', getUsers);

// Get User Route
router.get('/:id', getUser);

// Protect All Next Routes
router.use(protect);

// Create New User (Multer Middleware) Route
router.post('/', restrictedTo('admin'), singleFile('image'), createUser);

// Update User Details Route
router.patch('/:id/details', updateUserDetails);

// Update User Profile Image (Multer Middleware) Route
router.patch('/:id/profile-image', singleFile('image'), updateUserProfileImage);

// Delete User Route
router.delete('/:id', deleteUser);

export default router;
