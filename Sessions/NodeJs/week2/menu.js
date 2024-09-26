const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;

  
  const menu = [
    { id: 1, name: "Pica Margarita", price: 4 },
    { id: 2, name: "Cheese burger", price: 3.2 },
    { id: 3, name: "Dyner", price: 1.7 },
  ];

  if (req.method === "GET" && pathname === "/api/menu") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Menu items", menu }));
    
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
