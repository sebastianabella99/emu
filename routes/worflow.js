var express = require('express');
var router = express.Router();
var datos = null;


countrie = (req, res, next) => {
  console.clear();
  datos = require(`../data/${req.body.assertion}`);
  next();
};

router.post('/workflow', (req, res) => {
  console.log(req.body.stepId);
  var paso = req.body.stepId;
  switch(paso){
    case "000":
      paso = 'ING002';
      break;
    case "ING002":
      paso = 'ING003';
      break;
    case "ING003":
      paso = 'BEN001';
      break;
    case "BEN001":
      paso = 'CAM004';
      break;
    case "CAM004":
      paso = 'CAM005';
      break;
    case "CAM005":
      paso = 'CAM006';
      break;
    case "CAM006":
      paso = 'CAM007';
      break;
    case "CAM007":
      paso = 'CAM008';
      break;
    case "CAM008":
      paso = 'CAM009';
      break;
  };

  res.json({
    data: {
      stepStatus: datos.state,		
      clientId: '1234-4567-8901-2345-6789-0123',
      payload: datos[paso],
      stepId: paso
    }
  });
});

router.get('/auth/v1/keystore/.well-known/jwks.json', (req, res) => {
  res.json(require(`../data/key.json`));
});

router.post('/api/auth', countrie, (req, res) => {
  res.json({
    state:1, 
    access_token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NTM2Mjk1MTMsImV4cCI6MTU4NTE2NTk4OCwiYXVkIjoiIiwic3ViIjoiIiwicGFydG5lciI6IkxNIiwiY2xpZW50SWQiOiIxMjM0NTY3ODkwIn0.uG9p8SkWJALmEt_6P7neJQtKadyd9itg1Sle233hn7c',
    refresh_token:'abslslRSkskED2233ksksk82sss7jjsjjsRRksksF92DDD'
  });
});
module.exports = router;