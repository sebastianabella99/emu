var express = require('express');
var router = express.Router();
var datos = null;
var flujo = '';

countrie = (req, res, next) => {
  console.clear();
  flujo = req.body.assertion;
  datos = require(`../data/${req.body.assertion}`);
  req.body = { token: datos.token}
  next();
};

router.post('/workflow', (req, res) => {
  console.clear();
  console.log(req.body.stepId);
  var paso = req.body.stepId;
  switch(paso){
    case "INITIAL":
      paso = 'ING002';
      break;
    case "ING002":
      paso = 'TPC001';
      break;
    case "ING003":
      paso = 'BEN001';
      break;
    case "BEN001":
      paso = 'TPC001';
      break;
    case "TPC001":
      paso = 'VIN001';
      break;
    case "VIN001":
      paso = 'VIN002';
      break;
    case "VIN002":
      paso = 'VIN003';
      break;
    case "VIN003":
      paso = 'VIN004';
      break;
    case "VIN004":
      paso = 'VIN005';
      break;
    case "VIN005":
      paso = 'VIN006';
      break;
  };
  console.log('==============================================================================');
  console.warn({
    data: {
      stepStatus: 1,
      clientId: '1234-4567-8901-2345-6789-0123',
      payload: datos[paso],
      stepId: paso
    }
  })
  console.log('==============================================================================');
  res.json({
    data: {
      stepStatus: 1,
      clientId: '1234-4567-8901-2345-6789-0123',
      payload: datos[paso],
      stepId: paso
    }
  });
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
  res.json({
    state:1, 
    access_token: req.body.token,
    refresh_token:'abslslRSkskED2233ksksk82sss7jjsjjsRRksksF92DDD'
  });
});

module.exports = router;