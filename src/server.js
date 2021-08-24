import { createServer, Model } from 'miragejs';

export function makeServer() {
  let server = createServer({
    environment,
    models: {
      posts: Model,
    },
    seeds(server) {
      server.create('post', {
        title: 'sports',
        body:
          'Accra hearts of Oak will receive $5000 each every player',
      });
      server.create('post', {
        title: 'news',
        body:
          'Nana Darkwah Gyasi is the best sports commentator and presenter currently',
      });
      server.create('post', {
        title: 'IT',
        body:
          'Daniel is one of the few top developers in the world',
      });
    }
  });
  return server;
}