import express from 'express';
import editUser from '../controllers/editUser.js';

const router2 = express.Router();

router2.put('/edit', editUser);

export default router2;
