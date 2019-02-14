var http = require('http');
var url = require('url')
var data = JSON.stringify({ name: "heihei", age: 21 })
http.createServer(function (request, response) {
    var parse = url.parse(request.url, true)
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    if (parse.query.callback) {
        response.end(parse.query.callback+"("+data+")")
        return
    }
    response.end(data);
}).listen(8888, () => {
    console.log(8888)
});

