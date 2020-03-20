var express = require('express');
var router = express.Router();
var get_ip = require('ipware')().get_ip;

router.get('/', (req, res) => {
  res.json({
    ip: get_ip(req).clientIp
  });;
});

module.exports = router;