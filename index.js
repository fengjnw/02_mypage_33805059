var http = require("http");
const port = 8000;

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>My Page</title>
        </head>

        <body>
            <h1>Hello, World!</h1>
            <p>This is my page.</p>
            <h2>My Hobbies</h2>
            <ul>
                <li>Reading</li>
                <li>Traveling</li>
                <li>Coding</li>
            </ul>
        </body>

        </html>`);
}).listen(port, function () {
    console.log(`Node server is running on port ${port}...`);
});