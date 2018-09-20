import React, { Component } from "react";

// Components
import BookList from "./components/BookList";

class App extends Component {
  render() {
    return (
      <div className="App" id="main">
        <h2>Ray's Reading List</h2>
        <BookList />
      </div>
    );
  }
}

export default App;
