import User from '../../models/user.js';
import dotenv from 'dotenv';
dotenv.config();

export const getUser = async () => {
  const userFind = await User.find();
  return userFind;
};

// export const loginUser = async (newUser) => {
//   const logged = await User.create(newUser);
//   return logged;
// };

// export const AuthUser = async (email) => {
//   const registratedUser = await User.findOne({ email });
//   return registratedUser;
// };
