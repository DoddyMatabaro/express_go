const http = require('http');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));



app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    let elts = "<h1>Page not found</h1>\
            <ul>\
                <li><a href='/'>Home</a></li>\
            </ul> ";
    res.status(404).send(elts);
});

app.listen(3000);