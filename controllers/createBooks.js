import { createBook } from '../db/providers/books.js';
import { validationResult } from 'express-validator';

const createController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }

    const newBook = await createBook(req.body);
    return res.status(200).json(newBook);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

export default createController;
