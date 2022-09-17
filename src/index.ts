import { ApolloServer } from 'apollo-server';

import { schema } from './schema';

export const server = new ApolloServer({
  schema,
});

const PORT = process.env.port || 3000;

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
