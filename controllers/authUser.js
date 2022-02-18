import User from '../models/user.js';
import jwt from 'jsonwebtoken';

const authUSer = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const jwtSecret = process.env.JWTSECRET;
    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
    return res.json({
      token,
      user: {
        userId: user.id,
        username: user.username,
        email: user.email,
        password: user.password,
        pic: user.pic,
      },
    });
  } catch (error) {
    return res.status(400).json(e.message);
  }
};

export default authUSer;
