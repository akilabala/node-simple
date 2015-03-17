var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    });

    var readStream = fs.createReadStream(__dirname + '/index.html');

    readStream.pipe(res);
}).listen(60000);

console.log("Visiting my first page http://localhost:60000/index.html")