// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(br) {
    orm.all("burger", function(res) {
      br(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, br) {
    orm.create("burger", cols, vals, function(res) {
      br(res);
    });
  },
  update: function(objColVals, condition, br) {
    orm.update("burger", objColVals, condition, function(res) {
      br(res);
    });
  },
  delete: function(condition, br) {
    orm.delete("burger", condition, function(res) {
      br(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
