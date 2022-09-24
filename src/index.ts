import { ApolloServer } from 'apollo-server';
import { schema } from './schema';
import { context } from './context/context';

export const server = new ApolloServer({
  schema,
  context
});
require('dotenv').config();

const PORT = process.env.PORT || 3000;


server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});

