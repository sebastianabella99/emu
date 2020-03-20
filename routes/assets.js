var express = require('express');
const request = require('request');
var router = express.Router();
const path = require('path');

router.get('/:assets_id', (req, res) => {
  var fullUrl = 'https://mbaas.lab.cam.davivienda.com/catalogo/v1'+ req.originalUrl;
  if (req.originalUrl === '/asset/CONTRATO_CUENTA_AHORROS') {
    var options = {
      root: path.join(__dirname, '../assets'),
    }
    var fileName = 'CONTRATO_CUENTA_AHORROS.html';
    return res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Sent:', fileName)
      }
    });
  }
  request(fullUrl, { json: true }, (err, res2, body) => {
    return res.send(res2.body);
  });  
});

module.exports = router;