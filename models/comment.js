import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  postedBy: {
    type: String,
    ref: 'User',
  },
  content: {
    type: String,
    trim: true,
  },
  bookId: {
    type: String,
    ref: 'book',
  },
  pic: {
    type: String,
    ref: 'User',
  },
});

export default mongoose.model('Comment', CommentSchema);
