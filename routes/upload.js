var express = require('express');
var storage = require('../storage')();
var router = express.Router();
var get_ip = require('ipware')().get_ip;

router.post('/', (req, res) => {
  
  storage.storage(
    req,
    (bytesReceived, bytesExpected) => {
      console.log('Porcentaje de Recibimiento: ', (100/bytesExpected)*bytesReceived + '%');
    },
    (name, field) => {
      console.log('Got a field:', name, field);
    },
    (name, file) => {
    },
    (err) => {},
    () => {},
    () => {
      res.json({
        data: {
          fechaFtp: new Date(),
          nombreArchivo: 'XXXXX'
        }
      });
    }
   );
});

module.exports = router;