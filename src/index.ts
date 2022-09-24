import { ApolloServer } from 'apollo-server';
import { schema } from './schema';

export const server = new ApolloServer({
  schema,
});
require('dotenv').config();

const PORT = process.env.PORT || 3000;


server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});

