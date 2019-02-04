var express = require('express');
var router = express.Router();
var response=require('../models/query');
 
router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
response.getresponseById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
response.getAllresponses(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
 
 });
 }
 });
 router.post('/',function(req,res,next){
 
response.addresponse(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });
 router.delete('/:id',function(req,res,next){
 
response.deleteresponse(req.params.id,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });
 router.put('/:id',function(req,res,next){
 
response.updateresponse(req.params.id,req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 module.exports=router;