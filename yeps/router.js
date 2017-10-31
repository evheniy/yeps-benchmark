const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');
const pause = require('promise-pause-timeout');
const App = require('yeps');
const Router = require('yeps-router');

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

  router.get('/1').then(async (ctx) => {
    await pause(10);
    ctx.res.writeHead(200);
    ctx.res.end('1');
  });
  router.get('/2').then(async (ctx) => {
    await pause(10);
    ctx.res.writeHead(200);
    ctx.res.end('2');
  });
  router.get('/3').then(async (ctx) => {
    await pause(10);
    ctx.res.writeHead(200);
    ctx.res.end('3');
  });
  router.get('/4').then(async (ctx) => {
    await pause(10);
    ctx.res.writeHead(200);
    ctx.res.end('4');
  });
  router.get('/5').then(async (ctx) => {
    await pause(10);
    ctx.res.writeHead(200);
    ctx.res.end('5');
  });
  router.get('/6').then(async (ctx) => {
    await pause(10);
    ctx.res.writeHead(200);
    ctx.res.end('6');
  });
  router.get('/7').then(async (ctx) => {
    await pause(10);
    ctx.res.writeHead(200);
    ctx.res.end('7');
  });
  router.get('/8').then(async (ctx) => {
    await pause(10);
    ctx.res.writeHead(200);
    ctx.res.end('8');
  });
  router.get('/9').then(async (ctx) => {
    await pause(10);
    ctx.res.writeHead(200);
    ctx.res.end('9');
  });
  router.get('/10').then(async (ctx) => {
    await pause(10);
    ctx.res.writeHead(200);
    ctx.res.end('10');
  });

  app.then(router.resolve());

  const server = http.createServer(app.resolve());

  server.listen(parseInt(process.env.PORT || '3000', 10));
}
