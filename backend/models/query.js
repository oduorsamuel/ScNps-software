var db = require('../dbconnection'); //reference of dbconnection.js

var response = {
    //getiing responses from the database
    getDepartments(callback) {
        return db.query("Select departmentName from departments", callback);
    },
    addDepartment: function (response, callback) {
        return db.query("Insert into department values(departmentId,departmentName)", [response.departmentId, response.depatmentName], callback);
    },

    getPrograms(callback) {
        db.query("select `programName` from programs", callback);
    },

    addProgram: function (response, callback) {
        return db.query("Insert into programs values(programId,programName)", [response.programId, response.programName], callback);
    },

    getAcademicYear(callback) {
        db.query("select academicYear from academicyears", callback);
    },
    addAcademicYear: function (response, callback) {
        return db.query("Insert into academicyears values(academicYear)", [response.academicYear], callback);
    },

    getUnits(callback) {
        db.query("select * from units", callback);
    },

    addUnit: function (response, callback) {
        return db.query("Insert into units values(?,?)", [response.unitCode, response.unitName], callback);
    },

    getAllresponses(callback) {

        return db.query("Select * from response", callback);

    },
    getresponseById: function (id, callback) {

        return db.query("select * from sam where Id=?", [id], callback);
    },
    addresponse: function (response, callback) {
        return db.query("Insert into sam values(name,comment)", [response.name, response.comment], callback);
    },
    deleteresponse: function (id, callback) {
        return db.query("delete from sam where Id=?", [id], callback);
    },
    updateresponse: function (id, response, callback) {
        return db.query("update sam set name=?,comment=?", [response.name, response.comment], callback);
    }

};
module.exports = response;