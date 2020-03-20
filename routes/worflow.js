var express = require('express');
const uuidv1 = require('uuid/v1');
var router = express.Router();
var datos = null;
var flujo = '';
var n = 0;
var reAuth = 0;
var _reAuth = Infinity;

countrie = (req, res, next) => {
  reAuth = 0;
  console.clear();
  flujo = req.body.assertion;
  datos = require(`../OTPs/${req.body.assertion}`);
  console.log('pais:XXX::::::',);
  req.body = {
    token: req.body.grant_type === 'refresh_token' ? 'miFefreshToken' :datos.token
  };
  _reAuth = datos.reAuth === undefined ? 3 : datos.reAuth
  next();
};

router.post('/workflow', (req, res) => {
  console.clear();
  console.log(n + 1);
  n = n + 1;
  var paso = req.body.stepId;
  var response = {
    data: {
      status: datos[datos.workflow[paso]].status,
      clientId: '1234-4567-8901-2345-6789-0123',
      payload: datos[datos.workflow[paso]].payload,
      stepId: datos.workflow[paso],
      message: datos[datos.workflow[paso]].message
    },
    errors: []
  };
  console.log('==============================================================================');
  console.log(req.body.stepId);
  console.warn(response);
  console.log('==============================================================================');
  // if (n === 1) {
  //   res.status(401).json(response);
  // }
  // if (n > 1 || n === 0) {
  //   if ( n > 3) {
  //     n = 0;
  //   }
  setTimeout(() => res.status(200).json(response), 1);
  // }
  // n = n + 1;
});

// access_token

// {
//   "iss": "Online JWT Builder",
//   "iat": 1565906011,
//   "exp": 1597442011,
//   "aud": "www.example.com",
//   "sub": "jrocket@example.com",
//   "cliendtID": "0123456789",
//   "partner": "ML",
//   "product": "CAM",
//   "lenguaje": "es-CR",
//   "canal": "web",
//   "pais": "CR",
//   "modulo": "que???"
// }

router.post('/auth', countrie, (req, res) => {
  console.log('XXXXXXXXX:::::::::::::',req.body);
  let response = {
    state: 1,
    access_token: req.body.token,
    refresh_token: uuidv1()
  };
  reAuth = 0;
  res.json(response);
});


router.post('/reAuth', (req, res) => {
  res.json({
    access_token: uuidv1()
  });
});

module.exports = router;