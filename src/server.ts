import http from "http";

function main() {
  const server = http.createServer();

  server.on("request", (req, res) => {
    const { method, url } = req;
    console.log(`${method} ${url}`);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("hello world");
  });

  server.listen(3000, () => {
    console.log("🚀 ~ Server is listening on port 3000");
  });
}

main();
