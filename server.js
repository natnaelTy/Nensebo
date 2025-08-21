const { createServer } = require('http');
const next = require('next');
const { parse } = require('url');



const port = parseInt(process.env.NEXT_PUBLIC_PORT || '3000', 10);
const dev = process.env.NEXT_PUBLIC_NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
