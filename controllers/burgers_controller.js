var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/addB", function (req, res) {
  console.log(req.body)
  // var current_timestamp ="current_timestap()";
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function (result) {
    //res.render("index", result);
    res.redirect('/');
  })
});

router.put("/updateBurger", function (req, res) {
  var condition = "id = " + req.body.burger_id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: true
  }, condition, function (result) {
    console.log("Update results", result)
      if (result.affecteedRows == 0) {
        
        // If no rows were changed, then the ID must not exist, so 404
        res.redirect("/");
      } else {
        res.json(result);
      }
    });
});
// Export routes for server.js to use.
module.exports = router;
