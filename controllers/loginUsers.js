import User from '../models/user.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const loginUsers = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }

    const { username, email, password } = req.body;

    const user = await User.findOne({ username, email });

    if (!user) {
      return res.status(400).json({ message: 'Such user does not exists' });
    }

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Password is incorrect' });
    }
    const jwtSecret = process.env.JWTSECRET;
    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
    res.json({ token, userId: user.id });
  } catch (error) {
    return res.status(400).json(e.message);
  }
};

export default loginUsers;
