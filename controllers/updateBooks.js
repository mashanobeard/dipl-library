import { updateBook } from '../db/providers/books.js';
import { validationResult } from 'express-validator';

const updateController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    const details = req.body;
    const { id } = req.params;
    const book1 = await updateBook(id, details);
    //Object.assign(note, req.body)
    return res.status(200).json(book1);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default updateController;
