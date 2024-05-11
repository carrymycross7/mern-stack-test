import db from './server.js';
import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  author: String
});


const Book = new mongoose.model('Book', BookSchema, 'books');

const fetchBooks = async () => {
  try {
    const books = await Book.find({});
    return books;
  } catch(err) {
    console.error(err);
  }
};

const books = fetchBooks()
export default books;