import db from './server.js';
import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  author: String
});


const Book = mongoose.model('Book', BookSchema);

export default Book;