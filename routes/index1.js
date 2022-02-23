import express from 'express';

import getController from '../controllers/getBooks.js';
import getIdController from '../controllers/getIdBook.js';
import createController from '../controllers/createBooks.js';
import createComment from '../controllers/createComment.js';
import book from '../models/book.js';
import getComments from '../controllers/getComments.js';
import postRating from '../controllers/postRating.js';
import getRating from '../controllers/getRating.js';

const router1 = express.Router();

router1.get('/get', getController);
router1.get('/get/:id', getIdController);
router1.post('/comment', createComment);
router1.get('/comments/:id', getComments);

router1.post('/rating', postRating);
router1.get('/rating/:id', getRating);

router1.post('/', createController);
router1.put('/:id', async (req, res) => {
  const { id } = req.params;
  const bookToUpdate = await book.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(bookToUpdate);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't update the book" });
  }
});

export default router1;
