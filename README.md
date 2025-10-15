# MyPage

A Node.js demo used for deployment checks.

## Files

- **index.js**: Sets up a server using the built-in HTTP library and serves a static HTML page.

- **links.txt**: Contains the URL of the web application after deployment.

## Dependency

Currently, there are no external dependencies, so there's no need to run `npm install`.

## Test and Deploy

To test the application, run:

```bash
node index.js
```

Then, open [http://localhost:8000](http://localhost:8000).

For deployment, run:

```bash
forever index.js
```

Then, open the URL listed in `links.txt`.