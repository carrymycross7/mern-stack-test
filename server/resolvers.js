import Book from "./books.js";


// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    getBooks: async () => {
      console.log(Book.find({})); // debug - remove
      return Book.find({});
    },
    getBookByAuthor: async (parentValue, args) => {
      try {
        const books = await Book.find({ author: args.author });
        console.log(books); // debug - remove
        console.log(args); // debug - remove

        return books;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  },
  Mutation: {
    addBook: async (parentValue, args) => {
      const newBook = new Book({
        title: args.title,
        author: args.author
      });
      return newBook.save();
    },
    removeBook: async (parentValue, args) => {
      try {
        let book = await Book.findOne({
          title: args.title, author: args.author
        })
        return await Book.findByIdAndDelete({_id: book._id.toString()})
      } catch (er) {
        console.error('Error:', er);
      }
      //return Book.findOneAndDelete({ _id: args.id });
    }
  }
};

export default resolvers;