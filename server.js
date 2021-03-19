const http = require('http');

const hostname = '127.0.0.1'
const port = 1900

const server = http.createServer ((req, res) => {
    res.statusCode = 200
    res.setHeader ('content-type', 'text/plain');
    res.end ('Hello Dudu')
});

server.listen(port, hostname,() => {
    console.log(`server running on port ${port} and hostname: ${hostname}`);
})