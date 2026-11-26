// The "deployed" application: it starts and answers, and its health check is ok
const http = require("http");
http.createServer((req, res) => {
  if (req.url === "/health") {
    res.statusCode = 200;
    res.end("ok");
    return;
  }
  res.end("hello");
}).listen(8080, () => console.log("listening on 8080"));
