import { getBooks } from '../db/providers/books.js';

const getController = async (req, res) => {
  try {
    const data = await getBooks();
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e.message);
  }
};

export default getController;
