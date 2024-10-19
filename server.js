import si from 'systeminformation';
import { createServer } from 'http';

const PORT = process.env.SI_PORT || 8098;

var server = createServer(async (request, response) => {
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');

    try {
        if (request.method === 'OPTIONS') {
            response.writeHead(202);
            response.end();
        } else if (request.url == '/' || request.url == '/favicon.ico') {
            response.writeHead(200);
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ ...await si[request.url.replace('/', '')]() }));
        }
    } catch (error) {
        response.end(JSON.stringify({ error: error?.message + ' ' + error?.cause + ' ' + error?.stack }));
    }
});

server.listen(PORT, function () {
    console.log(`System Information server listening on: http://localhost:${PORT}`);
});