var express = require('express');
var router = express.Router();
var get_ip = require('ipware')().get_ip;

router.post('/', (req, res) => {
  res.json({
    data: {
      fechaFtp: new Date(),
      nombreArchivo: 'XXXXX'
    }
  });
});

module.exports = router;