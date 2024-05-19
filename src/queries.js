import { gql, useQuery } from "@apollo/client";

const GET_ALL_BOOKS = gql`
    query GetAllBooks {
        books {
            id
            title
            author
        }
    }
`;
// Define fetchBooks function
export const fetchBooks = async () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);

  if (loading) return console.log('Loading...');
  if (error) return console.error(`Error! ${error.message}`);

  console.log("Fetched books: ", data.books);
};

