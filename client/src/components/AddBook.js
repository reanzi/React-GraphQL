import React, { Component } from "react";
import { gql } from "apollo-boost"; //parse query
import { graphql } from "react-apollo"; // bind query data to react component

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
  displayAuthors() {
    let data = this.props.data;
    if (data.loading) {
      return <option disabled>Loading Authots ...</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }
  render() {
    return (
      <form id="add-book">
        {/* Book name */}
        <div className="field">
          <label htmlFor="book_name">Book Name</label>
          <input type="text" />
        </div>
        {/* book genre */}
        <div className="field">
          <label htmlFor="book_genre">Genre</label>
          <input type="text" />
        </div>
        {/* book author */}
        <div className="field">
          <label htmlFor="book_author">Author</label>
          <select>
            <option>Select Author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
