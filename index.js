var http = require("http");
const port = 8000;

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>My Page</title>
</head>

<body>
    <div>
        <header>
            <h1>Jinwei Feng</h1>
            <p>Hi there! I am Jinwei, a passionate web developer.</p>
        </header>

        <main>
            <section>
                <h2>About</h2>
                <p>Experienced in building small web applications.</p>
            </section>

            <section>
                <h2>Highlights</h2>
                <ul>
                    <li>Responsive interfaces using modern HTML and CSS</li>
                    <li>Lightweight JavaScript for interactive features</li>
                    <li>Familiar with version control and deployment</li>
                </ul>
            </section>

            <section>
                <h2>Contact</h2>
                <p>Email: <a href="mailto:jfeng004@gold.ac.uk">jfeng004@gold.ac.uk</a></p>
            </section>
        </main>

        <footer>
            <p>Jinwei Feng - 2025</p>
        </footer>
    </div>
</body>

</html>`);
}).listen(port, function () {
    console.log(`Node server is running on port ${port}...`);
});