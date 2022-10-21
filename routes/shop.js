const express = require('express');

const path = require('path');

const router = express.Router();

const rootDir = require('../util/helper');
const adminData = require('./admin');

router.get('/',(req, res, next)=>{
    const products =adminData.products;
    console.log(products)
    // res.sendFile(path.join(rootDir,'views', 'shop.html'));
    res.render('shop',{docTitle: 'Shop', prods: products});
});

module.exports = router;