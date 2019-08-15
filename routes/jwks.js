var express = require('express');
var router = express.Router();

router.get('/.well-known/jwks.json', (req, res) => {
  res.json(require(`../data/key`));
});

module.exports = router;