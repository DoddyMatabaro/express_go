const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log("in the middlware!");
    next(); // allows the request to continue  to  the next middlware
})
app.use((req, res, next)=>{
    console.log("an another middlware!");
    res.send('<h1>Hello from express !</h1>')
})
const server = http.createServer(app);

server.listen(3000);