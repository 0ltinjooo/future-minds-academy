const fs = require('fs');
const path = require('path');
const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("hello world");
});

server.listen(3004, () => {
    console.log("Server is running on port 3004");
});

fs.readFile('/Users/oltia/OneDrive/Desktop/homework.js', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
    

console.log('homework.js', __filename);