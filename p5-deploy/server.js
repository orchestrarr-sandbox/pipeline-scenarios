// The "deployed" application: it starts and answers, but its health check is wrong
const http = require("http");
http.createServer((req, res) => {
  if (req.url === "/health") {
    res.statusCode = 500;
    res.end("database is not ready");
    return;
  }
  res.end("hello");
}).listen(8080, () => console.log("listening on 8080"));
