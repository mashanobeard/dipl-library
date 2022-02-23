import Rating from '../models/rating.js';

const postRating = async (req, res) => {
  const ratings = await Rating.findOne({
    user: req.body.user,
    bookId: req.body.bookId,
  });
  if (ratings) {
    return res.send({ rating: ratings, message: 'You can vote' });
  } else {
    const rating = new Rating({ rating: req.body.rating, ...req.body });
    const saveRating = await rating.save();
    return res.send({ rating: saveRating, message: 'You have already voted' });
  }
};
export default postRating;
