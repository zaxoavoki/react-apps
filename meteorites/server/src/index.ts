import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';

import router from './endpoints';
import * as resolvers from './resolvers';
import typeDefs from './schema.graphql';
import bodyParser from 'body-parser';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
} as ApolloServerExpressConfig);

server.applyMiddleware({ app });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
