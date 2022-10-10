const http = require("http");

// se declaran las constantes 
const host = 'localhost';
const port = 8000;

//const requestListener = function (req, res) {};
const requestListener = function (req, res) {
    // Establecemos el tipo de contenido
res.setHeader("Content-Type", "application/json");
res.writeHead(200);
res.end(`{"message": "This is a JSON response"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
