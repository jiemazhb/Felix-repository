const http = require('http');

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to my Node.js server!');
        res.end();
    } else if (req.url === '/api') {
        res.write(JSON.stringify({ message: 'This is an API endpoint' }));
        res.end();
    } else {
        res.statusCode = 404;
        res.write('Not Found');
        res.end();
    }
});

// 监听端口 3000
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
