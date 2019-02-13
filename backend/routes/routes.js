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
});
router.post('/department',(req, res)=>{
  response.addDepartment(req.body,(err, count)=>{
    if(err){
       res.json(err);
    }else{
       res.json(req.body);
    }
  })
});

router.post('/program',(req, res)=>{
  response.addProgram(req.body,(err,count)=>{
   if(err){
    res.json(err);
   }else{
    res.json(req.body);
   }
  })
});

router.post('/academicYear',(req, res)=>{
  response.addAcademicYear(req.body,(err, count)=>{
    if(err){
      res.json(err);
    }else{
      res.json(req.body);
    }
  })
});

router.post('/unit',(req , res)=>{
  response.addUnit(req.body,(err , count)=>{
    if(err){
      res.json(err)
    }else{
      res.json(req.body);
    }
  })
})
router.delete('/unit:unitCode', function (req, res,) {

  response.deleteUnit(req.params.unitCode, function (err, count) {

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