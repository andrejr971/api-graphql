import 'reflect-metadata';
import './util/connection';

import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import CategoryResolver from './graphql/category/CategoryResolver';
import VideoResolver from './graphql/video/VideoResolver';

async function bootstrap () {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResolver],
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4100 },  () => {
    console.log('\u{1F680} server started')
  })
}

bootstrap();