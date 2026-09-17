const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

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
