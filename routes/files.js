var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  fs.readdir('./OTPs/', (err, files) => {
    return res.json(files.map(file => {
      return file.split('.')[0];
    }));
  });
});

module.exports = router;