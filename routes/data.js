var express = require("express");
const request = require("request");
var router = express.Router();
const path = require("path");

// El query "type" solo es para desarrollo local.

const respuesta = (req, res) => {
  var fullUrl = "https://mbaas.lab.cam.davivienda.com/catalogo/v1" + req.originalUrl;

  if ( false && req.originalUrl === '/data/MSG_CVI_001') {
    return res.json([{
      "message": "<strong><h3>{forEach_usuarios{<div style='color: blue; overflow-y=scroll;'>{{usuarios.index}}</div>{{usuario}}<br>}forEach}</h3></strong><center>Con este usuario {{usuario}} y la clave usted podrá ingresar a nuestros canales digitales.</center>",
      "title": "<div style='text-align: left; width: 150px; margin: auto;' ><strong><h6 style='margin: 0;'>¡Bienvenido a</h6><h3 style='margin: 0; color: red;'>Davivienda!</h3></strong></div>",
      "buttons": [{
        "callback": "op_login",
        "buttonText": "Descargar Aplicación"
      }]
    }]);
  }
  
  if ('/data/CONTRATO_CUENTA_AHORROS?pais=SV&modulo=CRECAM&lenguaje=ES&limit=-1' === req.originalUrl) {
    return res.json([{
      "message": "CONTRATO_CUENTA_AHORROS",
      "title": "",
      "buttons": [{
        "callback": "op_login",
        "buttonText": "Descargar Aplicación"
      }]
    }]);
  }
  request(fullUrl, { json: true }, (err, res2, body) => {
    return res.json(res2.body);
  });
};

router.get("/:data_id", respuesta);
router.get("/:data_id/:filtro", respuesta);

module.exports = router;
