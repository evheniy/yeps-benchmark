const http = require('http');
const pause = require('promise-pause-timeout');
const express = require('express');
const app = express();

// number of middleware

let n = parseInt(process.env.MW || '1', 10);
console.log('  %s middleware', n);

while (n--) {
    app.use(async (req, res, next) => {
        await pause(10);
        next();
    });
}

app.use(async (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
});

const server = http.createServer(app);

server.listen(parseInt(process.env.PORT || '3000', 10), () => {
    console.log(`Server started on port ${server.address().port}`);
});
