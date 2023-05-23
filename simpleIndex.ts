import { ApolloServer } from "@apollo/server";

const express = require("express");
require("dotenv").config();

interface Query {
  req: any;
  res: any;
}

//graphql server

//types query/mutation/subscription
const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`;

//resolvers
const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

//express server
const app = express();

app.get("/rest", (req: any, res: any) => {
  res.json({
    data: "API is working...",
  });
});

const port = 4000;
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
