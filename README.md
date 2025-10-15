# MyPage

A Node.js demo used for deployment checks.

## Files

- **index.js**: Sets up a server using the built-in HTTP library and serves a static HTML page.

- **links.txt**: Contains the URL of the web application after deployment.

## Dependency

Currently, there are no external dependencies, so there's no need to run `npm install`.

## Testing and Deployment

To test the application (which will close when the SSH session expires), run:

```bash
node index.js
```

For deployment (which will not expire), use:

```bash
forever index.js
```

Afterward, open the URL provided in `links.txt`.