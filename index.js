const http = require('http');

const express = require('express');

const app = express();

app.use('/next',(req, res, next)=>{
    console.log("an another middlware!");
    res.send('<h1>another page !</h1>')
});
app.use('/',(req, res, next)=>{
    console.log("an another middlware!");
    res.send('<h1>Hello from express !</h1>')
});
const server = http.createServer(app);

server.listen(3000);