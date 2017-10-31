const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');
const pause = require('promise-pause-timeout');
const App = require('koa');
const Router = require('koa-router');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app = new App();
  const router = new Router();

  router.get('/1', async (ctx, next) => {
    await next();
    await pause(10);
    ctx.body = '1';
  });
  router.get('/2', async (ctx, next) => {
    await next();
    await pause(10);
    ctx.body = '2';
  });
  router.get('/3', async (ctx, next) => {
    await next();
    await pause(10);
    ctx.body = '3';
  });
  router.get('/4', async (ctx, next) => {
    await next();
    await pause(10);
    ctx.body = '4';
  });
  router.get('/5', async (ctx, next) => {
    await next();
    await pause(10);
    ctx.body = '5';
  });
  router.get('/6', async (ctx, next) => {
    await next();
    await pause(10);
    ctx.body = '6';
  });
  router.get('/7', async (ctx, next) => {
    await next();
    await pause(10);
    ctx.body = '7';
  });
  router.get('/8', async (ctx, next) => {
    await next();
    await pause(10);
    ctx.body = '8';
  });
  router.get('/9', async (ctx, next) => {
    await next();
    await pause(10);
    ctx.body = '9';
  });
  router.get('/10', async (ctx, next) => {
    await next();
    await pause(10);
    ctx.body = '10';
  });

  app
    .use(router.routes())
    .use(router.allowedMethods());

  const server = http.createServer(app.callback());

  server.listen(parseInt(process.env.PORT || '3000', 10));
}
