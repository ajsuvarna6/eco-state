const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    let url = '/example' + req.url;
    if (req.url === '/' || req.url === '/index.html') {
        url = '/example/index.html';
    }
    if ((/\/dist\/eco\-state(\.min)?\.js(.map)?/ig).test(req.url)) {
        url = req.url;
    }
    fs.readFile(__dirname + url, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(8000);
