// import (require) connection.js

var connection = require('../config/connection.js')

// create methods that execute the necessary mysql commands in the controllers.
// these are the methods you will need to use in order to retrieve and store data
// in the database - selectAll(), insertOne(), updateOne()
// export the ORM object in module.exports

var orm = {
// select all
  selectAll: function(cb) {
   
    connection.query('SELECT * FROM burgers', function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
// insert
  insertOne: function(burger_name) {
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false
    });
  },
// update
   updateOne: function(burgerID){
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {item_id: burgerID}], function (err, result) {
        if (err) throw err;
        // cb(result);
      });

  }

};
module.exports = orm;