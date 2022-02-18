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

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    const jwtSecret = process.env.JWTSECRET;
    const token = jwt.sign({ id: user.id }, jwtSecret, {
      expiresIn: '30d',
    });
    res.json({
      token,
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      pic: user.pic,
      message: 'You are logged in!',
    });
    // res.send(user).status(201).json({ message: 'You are logged in!' });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default loginUsers;
