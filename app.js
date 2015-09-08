// Use Node.js to perform profile look-ups and serve our template via HTTP.

// 1. Create a web server

var http = require('http');

http.createServer(function (request, response) {
    resquest.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');ß

// 2. Handle HTTP route GET / and POST / i.e. Home
    // if URL == '/' && GET
        // show search
    // if URL == '/' && POST
        // redirect to /:username

// 3. Handle HTTP route GET /:username i.e. /chalkers
    // if URL == '/....'
        // get JSON from Treehouse
    // on 'end'
        // show profile
    // on 'error'
        // show error

// 4. Function that handles the reading of files and merge in values
    // read from file and get a string
    // merge values into string

