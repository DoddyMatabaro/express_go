const express = require('express');

const path = require('path');

const router = express.Router();

const rootDir = require('../util/helper')

router.get('/',(req, res, next)=>{
    // const products =adminData.products;
    // res.sendFile(path.join(rootDir,'views', 'shop.html'));
    res.render('shop',{docTitle: 'Shop'});
});

module.exports = router;