const http = require("http");

const app = {
  name: "BizPay",
  version: "0.1.0",
  status: "running"
};

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  if (req.url === "/api") {
    res.end(
      JSON.stringify({
        name: app.name,
        version: app.version,
        status: app.status,
        message: "Welcome to BizPay API"
      })
    );
    return;
  }

  if (req.url === "/api/status") {
    res.end(
      JSON.stringify({
        name: app.name,
        version: app.version,
        status: app.status
      })
    );
    return;
  }

  res.end(
    JSON.stringify({
      name: app.name,
      status: app.status
    })
  );
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`BizPay server is running on port ${PORT}`);
});