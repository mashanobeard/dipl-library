import express from 'express';
import { editUser, setPicture } from '../controllers/editUser.js';

const router2 = express.Router();

router2.put('/edit', editUser);
router2.put('/setPicture', setPicture);

export default router2;
