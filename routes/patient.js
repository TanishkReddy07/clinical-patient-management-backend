var express = require('express');
var router = express.Router();
patient = require('../models/PatientDetails');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/createPatient', function (req, res, next) {
  // res.send('respond with a resource');
  patient.createPatient(req.body, (err, prods) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(prods);
    }
  });
});
router.get('/getSpecificPatient', function (req, res, next) {
  // res.send('respond with a resource');
  patient.getPatientSpecific(req.query.id, (err, prods) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(prods);
    }
  });
});

router.post('/createPatientRecord', function (req, res, next) {
  // res.send('respond with a resource');
  patient.createPatient(req.body, (err, prods) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(prods);
    }
  });
});

router.get('/allPatients', function (req, res, next) {
  // res.send('respond with a resource');
  patient.getPatientAll((err, prods) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(prods);
    }
  });
});

router.post('/updatePatientHistory', function (req, res, next) {
  // res.send('respond with a resource');
  patient.updatePatient(req.body, (err, prods) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if (!prods['acknowledged']) res.json({ msg: 'Updated Successflully' });
    }
  });
});

module.exports = router;
