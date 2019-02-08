var express = require('express');
var router = express.Router();
var response = require('../models/query');
router.get('/departments', function (req, res,) {

  response.getDepartments(function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);//or return count for 1 &amp;amp;amp; 0
    }
  });
});

router.get('/programs', (req, res,) => {

  response.getPrograms((err, rows) => {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }

  });
});

router.get('/academicYears',(req, res)=>{
  response.getAcademicYear((err, rows)=>{
  if(err){
   res.json(err);
  }
  else{
   res.json(rows);
  }
  })
})

router.get('/units',(req , res)=>{
  response.getUnits((err, rows)=>{
   if(err){
    res.json(err);
   }
   else{
   res.json(rows);
   }
  })
})
router.post('/', function (req, res,) {

  response.addresponse(req.body, function (err, count) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
});
router.delete('/:id', function (req, res,) {

  response.deleteresponse(req.params.id, function (err, count) {

    if (err) {
      res.json(err);
    }
    else {
      res.json(count);
    }

  });
});
router.put('/:id', function (req, res,) {

  response.updateresponse(req.params.id, req.body, function (err, rows) {

    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
module.exports = router;