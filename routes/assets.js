var express = require('express');
const request = require('request');
var router = express.Router();
const path = require('path');

router.get('/:assets_id', (req, res) => {
  var fullUrl = 'https://mbaas.lab.cam.davivienda.com/catalogo/v1'+ req.originalUrl;
  
  request(fullUrl, { json: true }, (err, res2, body) => {
    return res.send(res2.body);
  });  
});

module.exports = router;