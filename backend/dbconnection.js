var mysql=require('mysql');
var connection=mysql.createPool({
 
 host:'localhost',
 user:'root',
 password:'',
 database:'final_year'
 
});
 module.exports=connection;