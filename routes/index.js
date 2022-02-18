import express from 'express';
import registrateUser from '../controllers/registrateUsers.js';
import getUsers from '../controllers/getUsers.js';
import createSchema from '../validation/createUser.js';
import loginSchema from '../validation/loginUser.js';
import loginUsers from '../controllers/loginUsers.js';

//import authUser from '../controllers/authUser.js';
//import AuthMiddleware from '../middleware/auth.js';
//import authorize from '../middleware/passport/auth.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/registration', createSchema, registrateUser);
router.post('/login', loginSchema, loginUsers);

// router.get('/auth', AuthMiddleware, authUser);

export default router;
