import React, { Component } from "react";
import ApolloClient from 'Apollo-boost';
import {ApolloProvider} from 'react-apollo';

// Components
import BookList from "./components/BookList";


// Apollo Client Setup
const client new ApolloClient({
  uri:'http://localhost:4000/graphql';
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h2>Ray's Reading List</h2>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
