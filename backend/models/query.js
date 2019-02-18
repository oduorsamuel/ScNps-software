var db = require('../dbconnection'); //reference of dbconnection.js

var response = {
    //getiing responses from the database
    getDepartments(callback) {
        return db.query("Select * from departments", callback);
    },
    addDepartment: function (response, callback) {
        return db.query("Insert into departments value(?,?)", [response.departmentId,response.departmentName], callback);
    },

    getPrograms(callback) {
        db.query("select * from programs", callback);
    },

    addProgram: function (response, callback) {
        return db.query("Insert into programs value(?,?,?)", [response.programId,response.programName,response.departmentId], callback);
    },

    getAcademicYear(callback) {
        db.query("select academicYear from academicyears", callback);
    },
    addAcademicYear: function (response, callback) {
        return db.query("Insert into academicyears values(?)", [response.academicYear], callback);
    },

    getUnits(callback) {
        db.query("select * from units", callback);
    },

    addUnit: function (response, callback) {
        return db.query("Insert into units values(?,?,?)", [response.unitCode, response.unitName, response.programId], callback);
    },
    getresponseById: function (id, callback) {

        return db.query("select * from sam where Id=?", [id], callback);
    },
    addresponse: function (response, callback) {
        return db.query("Insert into sam values(name,comment)", [response.name, response.comment], callback);
    },
    deleteUnit: function (unitCode, callback) {
        return db.query("delete from units where unitCode=?", [unitCode], callback);
    },
    deleteDepartment:function(departmentId, callback){
        return db.query("delete from departments where departmentId=?" ,[departmentId],callback);
    },
    deleteProgram:function(programId,callback){
     return db.query("delete from programs where programId=?", [programId], callback)
    }
};
module.exports = response;