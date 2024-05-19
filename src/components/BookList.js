import React, {useEffect, useContext} from "react";
import { gql, useMutation } from "@apollo/client";
import {fetchBooks} from "../queries.js";
function BookList () {
  useEffect(() => {
    console.log(fetchBooks());
  }, []);

  return (
      <div>
        {/* Component layout here */}
      </div>
  );
  return (
      <div>
        <h3>
          Here are all my books
        </h3>
      </div>
  )
}

export default BookList;
