import React, { Component } from "react";
import { gql } from "apollo-boost"; //parse query
import { graphql } from "react-apollo"; // bind query data to react component

const getBooksQuery = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

class BookList extends Component {
  displayBooks() {
    var data = this.props.data;
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
