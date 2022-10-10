const http = require('http');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    //res.setHeader("Content-Disposition", "attachment");
    res.writeHead(200);
    res.write('product,size,color,price');
    res.end();
};

const server = http.createServer(requestListener);
    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });