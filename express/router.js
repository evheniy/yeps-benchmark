const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');
const pause = require('promise-pause-timeout');
const express = require('express');

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
  const app = express();

  app.get('/1', async (req, res) => {
    await pause(10);
    res.send('1');
  });
  app.get('/2', async (req, res) => {
    await pause(10);
    res.send('2');
  });
  app.get('/3', async (req, res) => {
    await pause(10);
    res.send('3');
  });
  app.get('/4', async (req, res) => {
    await pause(10);
    res.send('4');
  });
  app.get('/5', async (req, res) => {
    await pause(10);
    res.send('5');
  });
  app.get('/6', async (req, res) => {
    await pause(10);
    res.send('6');
  });
  app.get('/7', async (req, res) => {
    await pause(10);
    res.send('7');
  });
  app.get('/8', async (req, res) => {
    await pause(10);
    res.send('8');
  });
  app.get('/9', async (req, res) => {
    await pause(10);
    res.send('9');
  });
  app.get('/10', async (req, res) => {
    await pause(10);
    res.send('10');
  });

  const server = http.createServer(app);

  server.listen(parseInt(process.env.PORT || '3000', 10));
}
