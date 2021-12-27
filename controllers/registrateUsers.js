import User from '../models/user.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';

const registrateUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    const { username, email, password } = req.body;
    const isUsed = await User.findOne({ email });
    if (isUsed) {
      res.status(300).json({ message: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ username, email, password: hashedPassword });
    console.log(user);
    await user.save();

    res.status(201).json({ message: 'User is created' });
  } catch (error) {
    console.log(error.message);
  }
};

export default registrateUser;
