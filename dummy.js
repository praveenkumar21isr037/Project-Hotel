var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (q.pathname == '/') {
        filename = "./home.html"; 
    }
    else if (q.pathname == '/games') {
      filename = "./games.html"; 
    }
    else if (q.pathname == '/ourstory') {
      filename = "./ourstory.html"; 
    }
    else if (q.pathname == '/registration') {
      filename = "./registration.html"; 
    }
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("Page not found");
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8000);

console.log("Server running");


