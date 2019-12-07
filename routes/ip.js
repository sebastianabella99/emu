var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({
      ip: req.ip
  });
});

module.exports = router;