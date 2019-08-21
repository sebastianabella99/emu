var express = require('express');
var router = express.Router();
const path = require('path');

// El query "type" solo es para desarrollo local.

const respuesta = (req, res) => {
  const query = req.query;
  file = req.params.data_id;
  // if( query.aliado ) {
  //   file = `${file}-A${query.aliado}`
  // }
  if( query.pais ) {
    file = `${file}-P${query.pais}`
  }
  // if( query.modulo ) {
  //   file = `${file}-M${query.modulo}`
  // }
  // if( query.canal ) {
  //   file = `${file}-C${query.canal}`
  // }
  // if( query.lenguaje ) {
  //   file = `${file}-L${query.lenguaje}`
  // }
  file = `${file}.json`
  console.log('Archivo enviado',file);
  res.sendFile(file, { root: path.join(__dirname, '../dataService') });
};

router.get('/:data_id', respuesta);
router.get('/:data_id/:filtro', respuesta);

module.exports = router;