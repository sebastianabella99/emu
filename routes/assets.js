var express = require('express');
const request = require('request');
var router = express.Router();
const path = require('path');

// El query "type" solo es para desarrollo local.
router.get('/:assets_id', (req, res) => {

  var fullUrl = 'https://mbaas.desa.cam.davivienda.com/catalogo/v1'+ req.originalUrl;
  
  console.log(fullUrl);

  request(fullUrl, { json: true }, (err, res2, body) => {
    if (err ) {
      const query = req.query;
      file = req.params.assets_id;
      // if( query.aliado ) {
      //   file = `${file}-A${query.aliado}`
      // }
      // if( query.pais ) {
      //   file = `${file}-P${query.pais}`
      // }
      // if( query.modulo ) {
      //   file = `${file}-M${query.modulo}`
      // }
      // if( query.canal ) {
      //   file = `${file}-C${query.canal}`
      // }
      // if( query.lenguaje ) {
      //   file = `${file}-L${query.lenguaje}`
      // }
      // file = `${file}.txt`
      file = `dfdf.txt`
      res.sendFile(file, { root: path.join(__dirname, '../assets') });
    }
    return res.send(res2.body);

  });

  
});

module.exports = router;