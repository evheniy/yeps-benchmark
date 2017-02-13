const http = require('http');
const App = require('koa');
const app = new App();

// number of middleware

let n = parseInt(process.env.MW || '1', 10);
console.log('  %s middleware', n);

while (n--) {
    app.use((ctx, next) => next());
}

app.use(async (ctx, next) => {
    await next();
    ctx.body = 'Hello World';
});

const server = http.createServer(app.callback());

server.listen(parseInt(process.env.PORT || '3000', 10), () => {
    console.log(`Server started on port ${server.address().port}`);
});
