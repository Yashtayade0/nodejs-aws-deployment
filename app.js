const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Node.js AWS Deployment</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg,#1e3c72,#2a5298);
                color:white;
                text-align:center;
                padding-top:100px;
            }
            .card{
                background:white;
                color:black;
                padding:40px;
                border-radius:10px;
                width:500px;
                margin:auto;
                box-shadow:0px 10px 30px rgba(0,0,0,0.3);
            }
            h1{
                color:#2a5298;
            }
            .badge{
                background:#2a5298;
                color:white;
                padding:10px 20px;
                border-radius:20px;
                display:inline-block;
                margin-top:15px;
            }
        </style>
    </head>
    <body>

        <div class="card">
            <h1>🚀 Node.js AWS Deployment</h1>
            <h2>Hello World!!</h2>
            
            <p>This application is deployed on <b>AWS EC2</b> using:</p>
            <p>✔ Node.js Application</p>
            <p>✔ Nginx Reverse Proxy</p>
            <p>✔ Let's Encrypt SSL</p>
            <p>✔ GitHub CI/CD Pipeline</p>

        </div>

    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});