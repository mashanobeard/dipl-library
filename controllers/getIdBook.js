//import { getId } from '../db/providers/books.js';
import book from '../models/book.js';

const getIdController = async (req, res) => {
  try {
    const data = await book.findById({ _id: req.params.id });
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e.message);
  }
};

export default getIdController;
