const http = require("http");

const host = "localhost";
const port = 3000; 

/*const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello world!.");
}); */

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello world!.</h1>");
});

server.listen(port, host, () =>{
    console.log("Si jala!!!");
});