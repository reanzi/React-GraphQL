import React, { Component } from "react";
import { graphql } from "react-apollo"; // bind query data to react component

import { getBooksQuery } from "../queries/queries";

class BookList extends Component {
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading books ...</div>;
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id}>
            {book.name} - <span>{book.genre}</span>
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
