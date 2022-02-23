import User from '../models/user.js';
import mongoose from 'mongoose';
export const editUser = async (req, res) => {
  const user = await User.findById(req.body.id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    const updateUser = await user.save();
    res.json({
      _id: updateUser._id,
      username: updateUser.username,
      email: updateUser.email,
    });
  } else {
    res.status(401);
    throw new Error('User Not found');
  }
};

export const setPicture = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.body._id },
      { pic: req.body.pic },
      { new: true }
    );
    res.send(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
