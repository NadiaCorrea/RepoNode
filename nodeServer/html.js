const http = require('http');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    //res.setHeader("Content-Type", "text/html");
    res.setHeader("Content-Disposition", "attachment");
    res.writeHead(200);
    res.write('<h1>Hola</h1> <p>Esto es un HTML</p>');
    res.end();
};

const server = http.createServer(requestListener);
    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
