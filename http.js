const http = require('http');
const pause = require('promise-pause-timeout');

// number of middleware

let n = parseInt(process.env.MW || '1', 10);
console.log('  %s middleware', n);

const server = http.createServer(async (req, res) => {
    await pause(10 * n);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
});

server.listen(parseInt(process.env.PORT || '3000', 10), () => {
    console.log(`Server started on port ${server.address().port}`);
});
