const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');
const pause = require('promise-pause-timeout');

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
  // number of middleware

  const n = parseInt(process.env.MW || '1', 10);
  console.log('  %s middleware', n);

  const server = http.createServer(async (req, res) => {
    await pause(10 * n);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  });

  server.listen(parseInt(process.env.PORT || '3000', 10));
}
