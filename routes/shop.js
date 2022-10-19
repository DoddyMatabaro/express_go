const express = require('express');

const router = express.Router();

router.get('/',(req, res, next)=>{
    let text = "<h1>Shop Home page</h1>\
                    <ul>\
                        <li><a href='/add-product'>Admin page</a></li>\
                        <li><a href='/*'>Something else</a></li>\
                    </ul> \ ";
    res.send(text);
});

module.exports = router;