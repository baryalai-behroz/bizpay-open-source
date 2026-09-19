const http = require("http");
const config = require("./config");
const { getStatus } = require("./routes/status");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  if (req.url === "/api/status") {
    res.end(JSON.stringify(getStatus()));
    return;
  }

  if (req.url === "/api") {
    res.end(
      JSON.stringify({
        name: config.name,
        version: config.version,
        status: "running",
        message: "Welcome to BizPay API"
      })
    );
    return;
  }

  res.end(
    JSON.stringify({
      name: config.name,
      status: "running"
    })
  );
});

server.listen(config.port, () => {
  console.log(`${config.name} server is running on port ${config.port}`);
});