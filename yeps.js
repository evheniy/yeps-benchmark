const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');
const pause = require('promise-pause-timeout');
const App = require('yeps');
const app = new App();

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

    let n = parseInt(process.env.MW || '1', 10);
    console.log('  %s middleware', n);

    const fns = [];
    while (n--) {
        fns.push(async () => {
            await pause(10);
        });
    }

    app.all(fns);

    app.then(async ctx => {
        ctx.res.writeHead(200, {'Content-Type': 'text/plain'});
        ctx.res.end('Hello World');
    });

    const server = http.createServer(app.resolve());

    server.listen(parseInt(process.env.PORT || '3000', 10));
}
