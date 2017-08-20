// import orm.js
// create code that will call the ORM using burger specific input for the ORM
// export at the end

var orm =  require("../config/orm.js");

var burger = {

  selectAll: function(cb){
    orm.selectAll(function(res){
      cb(res);
    });
  },

  insertOne: function(burger_name){
    orm.insertOne(burger_name);
  },

  updateOne: function(item_id){
    orm.updateOne(item_id);
  }

};


// Export at the end of the burger.js file.
module.exports = burger;