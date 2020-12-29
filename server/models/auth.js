const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const Auth = function (params) {
  this.id = params.id;
  this.first_name = params.first_name;
  this.last_name = params.last_name;
  this.email = params.email;
  this.mobile = params.mobile;
  this.country_code = params.country_code;
  this.searchText = params.searchText;
};


Auth.prototype.register = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }

      connection.changeUser({database : dbName});
      
      let query = `INSERT INTO user( first_name, last_name, email, country_code, mobile) VALUES ?;`;
      let Values = [[that.first_name, that.last_name, that.email,that.country_code, that.mobile]];

      connection.query(query, [Values], function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  }
          resolve(rows);
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
} 






Auth.prototype.getUserList = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }

      connection.changeUser({database : dbName});
      let Query = `SELECT * FROM user WHERE 1 `;
      
      if(that.searchText !== ""){
        Query = Query + ` AND (id = '${that.searchText}' OR first_name LIKE '%${that.searchText}%' OR last_name LIKE '%${that.searchText}%' OR mobile LIKE '%${that.searchText}%' OR email LIKE '%${that.searchText}%');`;
      }

      connection.query(Query, function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  }          
        resolve(rows);
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
} 
module.exports = Auth;