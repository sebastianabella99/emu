var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({
      ip: '0.0.0.0'
  });
});

module.exports = router;