const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// Serve your existing website
app.use(express.static(path.join(__dirname, 'public')));

// Proxy API requests
app.use('/api', createProxyMiddleware({
    target: 'https://api.easytogo123.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // remove '/api' from the path
    },
    onProxyReq: (proxyReq, req, res) => {
        // Add CORS headers to the proxy response
        res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        console.log(`Proxying request: ${req.method} ${req.url}`);
    }
}));

app.options('/api/*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
