var express = require("express");
const request = require("request");
var router = express.Router();
const path = require("path");

const respuesta = (req, res) => {
  const ambiente = 'lab.cam';
  var fullUrl = `https://mbaas.${ambiente}.davivienda.com/catalogo/v1${req.originalUrl}`;
  if ( req.originalUrl === '/data/ING001PROD/visible?pais=CR&lenguaje=ES&canal=2&property=status' ) {
    fullUrl = `https://mbaas.${ambiente}.davivienda.com/catalogo/v1/data/ING001/visible?pais=CR&lenguaje=ES&canal=2&property=status`;
  }

  if ( req.originalUrl === '/data/VALIDACIONES_CRE001?pais=HN&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([{
      simboloMoneda: "L",
      ingresosMensuales: {
        validationForMinLength: 4,
        validationForMaxLength: 7,
        restric: "0123456789"
      },
      errores: {
        ingresosMensuales: [
          { type: 'required', label: 'Información requerida.'},
          {
            type: 'pattern',
            label: ' Formato incorrecto, se permiten 4 digitos minitmos y 7 maximos, con 2 decimales opcionales.'
          },
          { type: 'minlength', label: 'No se permiten menos de 4 digitos.'},
          { type: 'maxlength', label: 'No se permiten más de 7 digitos.'},
        ],
        valorDeseado: [],
        plazo: [],
        creditoLibranza: []
      }
    }]);
  }

  if ( req.originalUrl === '/data/VALIDACIONES_CRE001?pais=CR&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([{
      simboloMoneda: "₡"
    }]);
  }

  if ( req.originalUrl === '/data/VALIDACIONES_CRE001?pais=SV&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([{
      simboloMoneda: "$"
    }]);
  }

  if ( req.originalUrl === '/data/VALIDACIONES_CRE001?pais=PA&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([{
      simboloMoneda: "$"
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE001?lenguaje=ES&pais=HN') {
    return res.json([{
      titulo: "Seleccione las condiciones de su crédito:",
      rango: {
        label: "Escoja el valor deseado",
        min: "Min.",
        max: "Máx.",
      },
      plazo: {
        label: "Escoja el plazo",
        min: "Min.",
        max: "Máx.",
      },
      boton: {
        label: "Simular Crédito"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE001?lenguaje=ES&pais=CR') {
    return res.json([{
      titulo: "Seleccione las condiciones de su crédito:",
      rango: {
        label: "Escoja el valor deseado",
        min: "Min.",
        max: "Máx.",
      },
      plazo: {
        label: "Escoja el plazo",
        min: "Min.",
        max: "Máx.",
      },
      boton: {
        label: "Simular Crédito"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE001?lenguaje=ES&pais=SV') {
    return res.json([{
      titulo: "Seleccione las condiciones de su crédito:",
      rango: {
        label: "Escoja el valor deseado",
        min: "Min.",
        max: "Máx.",
      },
      plazo: {
        label: "Escoja el plazo",
        min: "Min.",
        max: "Máx.",
      },
      boton: {
        label: "Simular Crédito"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE001?lenguaje=ES&pais=PA') {
    return res.json([{
      titulo: "Seleccione las condiciones de su crédito:",
      rango: {
        label: "Escoja el valor deseado",
        min: "Min.",
        max: "Máx.",
      },
      plazo: {
        label: "Escoja el plazo",
        min: "Min.",
        max: "Máx.",
      },
      boton: {
        label: "Simular Crédito"
      }
    }]);
  }

  request(fullUrl, { json: true }, (err, res2, body) => {
    return res.json(res2.body);
  });
};

router.get("/:data_id", respuesta);
router.get("/:data_id/:filtro", respuesta);

module.exports = router;
