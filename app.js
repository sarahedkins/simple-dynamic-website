// Use Node.js to perform profile look-ups and serve our template via HTTP.
var router = require("./route.js");
// Create a web server
var http = require('http');

http.createServer(function (request, response) {
    router.home(request, response);
    router.user(request, response);
}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');


