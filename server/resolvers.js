import books from "./books.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    findBookByAuthor: async (args) => {
      let newbooks = await books;
      console.log(args); // debug - remove
      console.log(newbooks); // debug - remove
      console.log(books); // debug - remove
      return books.find((book) => book.author === args.author);
    }
  }
};

export default resolvers;