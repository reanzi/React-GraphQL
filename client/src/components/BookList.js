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
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="book-list">
          <li>Book Name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
