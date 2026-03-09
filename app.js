const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send(`
<h1>🚀 Node.js AWS Deployment</h1>
<h2>Hello from Yash Tayade</h2>
<p>This app is deployed using AWS EC2, Nginx, SSL and CI/CD.</p>
`);
});

app.listen(3000, () => {
console.log("Server running on port 3000");
});