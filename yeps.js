const http = require('http');
const pause = require('promise-pause-timeout');
const App = require('yeps');
const app = new App();

// number of middleware

let n = parseInt(process.env.MW || '1', 10);
console.log('  %s middleware', n);

while (n--) {
    app.then(async () => {
        await pause(10);
    });
}

app.then(async ctx => {
    ctx.res.writeHead(200, {'Content-Type': 'text/plain'});
    ctx.res.end('Hello World');
});

const server = http.createServer(app.resolve());

server.listen(parseInt(process.env.PORT || '3000', 10), () => {
    console.log(`Server started on port ${server.address().port}`);
});
