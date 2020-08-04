var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  fs.readdir('./OTPs/', (err, files) => {
    console.log('req files', files)
    return res.json(files.map(file => {
      console.log('res files', files);
      return file.split('.')[0];
    }));
  });
});

module.exports = router;