const http = require('http');

function message() {
    return 'Hello from Step Project 2';
}

if (require.main === module) {
    const port = process.env.PORT || 3000;

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(message());
    });

    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports = { message };
