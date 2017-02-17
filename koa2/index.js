const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');
const pause = require('promise-pause-timeout');
const App = require('koa');
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

    while (n--) {
        app.use(async (ctx, next) => {
            await pause(10);
            await next();
        });
    }

    app.use(async (ctx, next) => {
        await next();
        ctx.body = 'Hello World';
    });

    const server = http.createServer(app.callback());

    server.listen(parseInt(process.env.PORT || '3000', 10));
}
