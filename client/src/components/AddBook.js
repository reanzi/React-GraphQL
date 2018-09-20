import React, { Component } from "react"; //parse query
import { graphql, compose } from "react-apollo"; // bind query data to react component

import { getAuthorsQuery, addBookMutation } from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
  }
  displayAuthors() {
    let data = this.props.getAuthorsQuery;
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
  submitForm(e) {
    e.preventDefault();
    this.props.addBook();
  }
  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        {/* Book name */}
        <div className="field">
          <label htmlFor="book_name">Book Name</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        {/* book genre */}
        <div className="field">
          <label htmlFor="book_genre">Genre</label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        {/* book author */}
        <div className="field">
          <label htmlFor="book_author">Author</label>
          <select onChange={e => this.setState({ authorId: e.target.value })}>
            <option>Select Author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBook" })
)(AddBook);
