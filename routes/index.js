import express from 'express';
import registrateUser from '../controllers/registrateUsers.js';
import getUsers from '../controllers/getUsers.js';
import createSchema from '../validation/createUser.js';
import loginSchema from '../validation/loginUser.js';
import loginUsers from '../controllers/loginUsers.js';
const router = express.Router();

router.get('/', getUsers);
router.post('/registration', createSchema, registrateUser);
router.post('/login', loginSchema, loginUsers);

export default router;
