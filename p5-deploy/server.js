// The "deployed" application: it starts and answers, but its health check reads a key of its configuration that does not exist
const http = require("http");
const config = { port: 8080, ready: true };
http.createServer((req, res) => {
  if (req.url === "/health") {
    const ready = config.raedy === true;
    res.statusCode = ready ? 200 : 500;
    res.end(ready ? "ok" : "not ready");
    return;
  }
  res.end("hello");
}).listen(config.port, () => console.log(`listening on ${config.port}`));
