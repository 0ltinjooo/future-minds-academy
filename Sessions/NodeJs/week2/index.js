const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 500;
      res.end("Error loading file");
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(content);
  });
});

// Move server.listen outside the request handler
server.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
});
