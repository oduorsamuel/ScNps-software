var db=require('../dbconnection'); //reference of dbconnection.js
 
var response={
 //getiing responses from the database
getAllresponses:function(callback){
 
return db.query("Select * from response",callback);
 
},
 getresponseById:function(id,callback){
 
return db.query("select * from response where Id=?",[id],callback);
 },
 addresponse:function(response,callback){
 return db.query("Insert into response values(encounterId,question,answer)",[response.encounterId,response.question,response.answer],callback);
 },
 deleteresponse:function(id,callback){
  return db.query("delete from response where Id=?",[id],callback);
 },
 updateresponse:function(id,response,callback){
  return db.query("update response set Title=?,Status=? where Id=?",[response.department,response.program,response.academicYear,response.yearOfStudy,response.semester,response.unitCode,response.question,response.answer],callback);
 }
 
};
 module.exports=response;