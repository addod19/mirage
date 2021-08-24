import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
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
    },
    routes() {
      this.namespace = 'api/posts';
      this.get('/', (schema, request) => {
        return schema.posts.all();
      });
      this.get('/:id', (schema, request) => {
        let id = request.params.id;
        return schema.posts.find(id);
      });
      this.post('/', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.posts.create(attrs);
      });
      this.patch('/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let post = schema.posts.find(id);
        return post.update(newAttrs);
      });
      this.delete('/:id', (schema, request) => {
        let id = request.params.id;
        return schema.posts.find(id).destroy();
      });
    },
  });
  return server;
}