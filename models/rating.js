import mongoose from 'mongoose';

const RatingSchema = new mongoose.Schema({
  user: {
    type: String,
    isUnique: true,
    ref: 'User',
  },
  bookId: {
    type: String,
    ref: 'Film',
  },
  rating: {
    type: mongoose.Schema.Types.Number,
    required: false,
  },
});

export default mongoose.model('Rating', RatingSchema);
