const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

// connect to mLab db
mongoose.connect(
  "mongodb://reanzi:reanzi1@ds161102.mlab.com:61102/react_graph",
  { useNewUrlParser: true }
);
mongoose.connection
  .on("error", console.error.bind(console, "connection error:"))
  .once("open", () => {
    console.log("connected to the MongoDB");
  });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => console.log("Listening on Port 4000"));
