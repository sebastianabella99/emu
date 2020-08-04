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
    access_token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1ODc3NjkxODYifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU5MTYzNjE3NCwiaWF0IjoxNTkxNjM1NTc0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjZjOGJmNDYwLWE5YTktMTFlYS1iNWVhLTI5YzI3ZTBhZDliYSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX0NSXzEiLCJqdGkiOiI2ZTAyOGVkMC1hOWE5LTExZWEtOTQ3ZC1hOTc3NzAyYTJkNmQifQ.Kg7lmJpoixf4MdKt1ygFhtCjk64n15Ki51NK83VKo79FCAqb8xwvvawu-o7pz3mZadA9kU1VIqp9TWXBGOjag5VOOm7VJqcrloZyx2lu2DkwzEXMk8-DYE3DAd_qg2lvOk_Qg_itwarq07NBDTQtt26vVa_Z-LCk8o76IBfOIMdczXKSH5MlSuJfBq8cJJlN1SRGksXYDc-ynOw40HGjKJEYfibyg9UYsxDil9nD4d6tiH9JtQf8gxl2xLaS2F_HLaES66I66cLQJFrnhMk-i7KCzqV-1U9uXneitdqBo-kWvvecfxQaqid-f4v8iEeept2qBfzbZ5mAuRi8GCB4kQ',
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