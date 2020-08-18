var express = require("express");
var router = express.Router();

const respuesta = (req, res) => {
  res.json({
    date: new Date()
  });
};

router.post("/", respuesta);

module.exports = router;
