import book from '../../models/book.js';
import dotenv from 'dotenv';
dotenv.config();

export const getBooks = async () => {
  const bookFind = await book.find();
  return bookFind;
};

// export const getId = async () => {
//   const bookFindId = await book.findById({ _id: req.params.id });
//   return bookFindId;
// };

export const createBook = async (newBook) => {
  const createdBook = await book.create(newBook);
  return createdBook;
};

export const updateBook = async (_id, details) => {
  const updatedBook = await book.findByIdAndUpdate({ _id: _id }, details, {
    new: true,
  });
  return updatedBook;
};
