import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    default:
      'https://w7.pngwing.com/pngs/500/123/png-transparent-kitten-cat-avatar-hd-cat-avatar-mammal-3d-computer-graphics-heroes.png',
  },
});

export default mongoose.model('User', schema);
