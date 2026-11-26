# The "deployed" application: it starts and answers, but its health check is wrong
from http.server import BaseHTTPRequestHandler, HTTPServer


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        body = b"ok" if self.path == "/health" else b"hello"
        self.send_response(200)
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    print("listening on 8080", flush=True)
    HTTPServer(("", 8080), Handler).serve_forever()
