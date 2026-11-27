// The "deployed" application: it starts and answers, and its health check reads the key "ready" of its configuration
const http = require("http");
const config = { port: 8080, ready: true };
http.createServer((req, res) => {
  if (req.url === "/health") {
    const ready = config.ready === true;
    res.statusCode = ready ? 200 : 500;
    res.end(ready ? "ok" : "not ready");
    return;
  }
  res.end("hello");
}).listen(config.port, () => console.log(`listening on ${config.port}`));
