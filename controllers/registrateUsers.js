import User from '../models/user.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';

const registrateUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ erros: errors.array(), message: 'data is invalid' });
    }
    const { username, email, password, pic } = req.body;
    const isUsed = await User.findOne({ username, email });
    if (isUsed) {
      res
        .status(300)
        .json({ message: 'User with this username or email  already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ username, email, password: hashedPassword, pic });
    console.log(user);
    const data = await user.save();
    // res.send({ newUser: data });

    res.status(201).json({ message: 'User is created' });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default registrateUser;
