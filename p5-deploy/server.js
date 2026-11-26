// The "deployed" application: it starts and answers, but its health check is wrong
const http = require("http");
http.createServer((req, res) => {
  if (req.url === "/health") {
    res.statusCode = 200;
    res.end("ok");
    return;
  }
  res.end("hello");
}).listen(8080, () => console.log("listening on 8080"));
