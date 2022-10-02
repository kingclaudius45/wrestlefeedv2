import express from 'express';
import { getPosts,createPost,updatePost} from '../controllers/posts.js';
const router = express.Router();

router.get('/',getPosts); // using getPosts from controller
router.post('/', createPost);//creating a post req to create memory
router.patch('/:id', updatePost); // to update using edit button

export default router;