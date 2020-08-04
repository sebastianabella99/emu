var express = require("express");
const request = require("request");
var router = express.Router();
const path = require("path");

// El query "type" solo es para desarrollo local.

const respuesta = (req, res) => {
  var fullUrl = "https://mbaas.lab.cam.davivienda.com/catalogo/v1" + req.originalUrl;
  if (!req.originalUrl.indexOf("ING001")) {
    fullUrl = "https://mbaas.lab.cam.davivienda.com/catalogo/v1"+ req.originalUrl;
  }

  if ( req.originalUrl === '/data/ING001/visible?pais=SV&lenguaje=ES&canal=1&property=status') {
    console.log('canal1');
    return res.json([
    {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "urlExterna": {
          "urlExterna": "https://tarjetadigitaldev.davivienda.com.hn/sv"
        }
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }, {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "urlExterna": {
          "urlExterna":"https://tarjetadigitaldev.davivienda.com.hn/sv"
        }
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }]);
  }

  if ( req.originalUrl === '/data/ING001/visible?pais=SV&lenguaje=ES&canal=2&property=status') {
    console.log('canal2');
    return res.json([
    {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "urlExterna": {
          "urlExterna": "https://tarjetadigitaldev.davivienda.com.hn/sv"
        }
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }, {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "urlExterna": {
          "urlExterna": "https://tarjetadigitaldev.davivienda.com.hn/sv"
        }
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }]);
  }

  if ( req.originalUrl === '/data/ING001/visible?pais=HN&lenguaje=ES&canal=1&property=status') {
    console.log('canal1');
    return res.json([
    {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea HN",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "urlExterna": {
          "urlExterna": "https://tarjetadigital.davivienda.com.hn/"
        }
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }, {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil aaa",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "urlExterna": {
          "urlExterna": "https://tarjetadigital.davivienda.com.hn/"
        }
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }]);
  }

  if ( req.originalUrl === '/data/ING001/visible?pais=HN&lenguaje=ES&canal=2&property=status') {
    console.log('canal2');
    return res.json([
    {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea HN",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "urlExterna": {
          "urlExterna": "https://tarjetadigital.davivienda.com.hn/",
          "os": "Android"
        }
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }, {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "urlExterna": {
          "urlExterna": "https://tarjetadigital.davivienda.com.hn/",
          "os": "Android"
        }
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }]);
  }

  if ( req.originalUrl === '/data/ING001/visible?pais=CR&lenguaje=ES&canal=1&property=status') {
    console.log('canal1');
    return res.json([
    {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "urlExterna": {"urlExterna":"https://crediquick.apptividad.net/DAVIVIENDA_QA/TestPostMessage/index.html"}
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }, {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "urlExterna": {"urlExterna":"https://crediquick.apptividad.net/DAVIVIENDA_QA/TestPostMessage/index.html"}
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }]);
  }

  if ( req.originalUrl === '/data/ING001/visible?pais=CR&lenguaje=ES&canal=2&property=status') {
    console.log('canal1');
    return res.json([
    {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "urlExterna": {"urlExterna": "https://crediquick.apptividad.net/DAVICR_Autoatencion_QA/Apptividad.Ozono.WebApp/Home/IndexDeepLinkWithSSOT?pSSOT=9CE0EC2D-47E8-47DC-BB06-CA83E0DF5E6F&pModelId=PRIV_DAVI_AUTO_ATENCION;;1"}
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }, {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "urlExterna": {"urlExterna": "https://crediquick.apptividad.net/DAVICR_Autoatencion_QA/Apptividad.Ozono.WebApp/Home/IndexDeepLinkWithSSOT?pSSOT=9CE0EC2D-47E8-47DC-BB06-CA83E0DF5E6F&pModelId=PRIV_DAVI_AUTO_ATENCION;;1"}
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }]);
  }

  if ( req.originalUrl === '/data/ING001/visible?pais=PA&lenguaje=ES&canal=1&property=status') {
    console.log('canal1');
    return res.json([
    {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "urlExterna": {"urlExterna": "https://daviviendadigital.com.pa/Apptividad.Ozono.WebApp/Home/IndexDeepLinkWithSSOT?pSSOT=57D20BBB-96BB-49D9-B1A3-1E0FAE0AA1F0&pModelId=PRIV_DAVIPAN_AUTO_ATENCION;;1"}
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }, {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "urlExterna": {"urlExterna": "https://daviviendadigital.com.pa/Apptividad.Ozono.WebApp/Home/IndexDeepLinkWithSSOT?pSSOT=57D20BBB-96BB-49D9-B1A3-1E0FAE0AA1F0&pModelId=PRIV_DAVIPAN_AUTO_ATENCION;;1"}
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }]);
  }

  if ( req.originalUrl === '/data/ING001/visible?pais=PA&lenguaje=ES&canal=2&property=status') {
    console.log('canal1');
    return res.json([
    {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "urlExterna": {"urlExterna": "https://daviviendadigital.com.pa/Apptividad.Ozono.WebApp/Home/IndexDeepLinkWithSSOT?pSSOT=57D20BBB-96BB-49D9-B1A3-1E0FAE0AA1F0&pModelId=PRIV_DAVIPAN_AUTO_ATENCION;;1"}
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "invisible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": false}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }, {
      "titulo": "Crédito Móvil",
      "imagen": "asset_IMG_ING001_001",
      "descripcion": "Crédito de consumo con aprobación en línea",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CRECAM"
      }
    }, {
      "titulo": "Cuenta Móvil",
      "imagen": "asset_IMG_ING001_002",
      "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato",
      "tipo": "workflow",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "workflow": "CTACAM"
      }
    }, {
      "titulo": "Tarjeta Móvil",
      "imagen": "asset_IMG_ING001_003",
      "descripcion": "Solicítela y recíbala en su domicilio",
      "tipo": "urlExterna",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "urlExterna": {"urlExterna": "https://daviviendadigital.com.pa/Apptividad.Ozono.WebApp/Home/IndexDeepLinkWithSSOT?pSSOT=57D20BBB-96BB-49D9-B1A3-1E0FAE0AA1F0&pModelId=PRIV_DAVIPAN_AUTO_ATENCION;;1"}
      }
    }, {
      "titulo": "Depósitos a Plazo",
      "imagen": "asset_IMG_ING001_004",
      "descripcion": "Abra un Depósito a Plazo 100% Digital",
      "tipo": "postMessage",
      "status": "visible",
      "condiciones": [
        { "op": "igual", "path": "zona", "value": true}
      ],
      "data": {
        "postMessage": "op_cdt"
      }
    }]);
  }

  if ( req.originalUrl === '/data/MENU_MODAL_URL?pais=HN&lenguaje=ES&canal=1') {
    return res.json([{
      "title": "Tarjeta Móvil",
      "message": "serás dirigido a nuestro portal",
      "buttons": [{
        "buttonText": "Aceptar",
        "class": "alertModal__footer--button alertModal__footer--button--primary"
      }, {
        "buttonText": "Cancelar",
        "class": "alertModal__footer--button alertModal__footer--button--auxiliar"
      }]
    }])
  }

  if ( req.originalUrl === '/data/postMessage') {
    return res.json([
      {
        name: 'appReady',
        postMessage: {
            event: 'appReady'
        }
      }, {
        name: 'setTitle',
        postMessage: {
          event: 'setTitle',
          title: ''
        }
      }, {
        name: 'registerPath',
        postMessage: {
          event: 'registerPath',
          code: null,
          description: null,
          serverEnrollmentKey: null,
          uuidDevice: null,
          uuidTransaction: null,
          typeEnrollment: null,
          userId: null,
          userType: null
        }
      }, {
        name: 'appFinish',
        postMessage: {
          event: 'appFinish',
          serverEnrollmentKey: '',
          status: '',
          statusCode: '',
          statusMessage: ''
        }
      }, {
        name: 'navigate',
        postMessage: {
          event: 'navigate',
          fn: '',
          message: {
            direction: '',
            redirectUrl: '',
            statusCode: '',
            statusMessage: '',
            statusFinish: ''
          }
        }
      }, {
        name: 'captureFrontDocument',
        postMessage: {
          event: 'captureFrontDocument',
          serverEnrollmentKey: '',
          pathId: ''
        }
      }, {
        name: 'captureBackDocument',
        postMessage: {
          event: 'captureBackDocument',
          serverEnrollmentKey: ''
        }
      }, {
        name: 'captureFace',
        postMessage: {
          event: 'captureFace',
          serverEnrollmentKey: ''
        }
      }
    ]);
  }


  request(fullUrl, { json: true }, (err, res2, body) => {
    return res.json(res2.body);
  });
};

router.get("/:data_id", respuesta);
router.get("/:data_id/:filtro", respuesta);

module.exports = router;
