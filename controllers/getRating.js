import Rating from '../models/rating.js';

const getRating = async (req, res) => {
  try {
    const rating = await Rating.find({ bookId: req.params.id });
    res.send({ success: true, rating });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

export default getRating;
