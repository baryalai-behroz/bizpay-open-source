const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  if (req.url === "/api") {
    res.end(
      JSON.stringify({
        name: "BizPay",
        version: "0.1.0",
        status: "running",
        message: "Welcome to BizPay API"
      })
    );
    return;
  }

  res.end(
    JSON.stringify({
      name: "BizPay",
      status: "running"
    })
  );
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`BizPay server is running on port ${PORT}`);
});