import Comment from '../models/comment.js';

const createComment = async (req, res) => {
  try {
    const comment = new Comment({ postedBy: req.params.username, ...req.body });
    const saveComment = await comment.save();
    res.send({ comment: saveComment });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default createComment;
