import User from '../models/user.js';

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ bookId: req.params.id });
    const picture = await User.find({ id: req.params._id });
    res.send({ success: true, comments, picture });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default getComments;
