const res = require("express/lib/response")

module.exports.home = function (req,res) {
      res.send("<h1>HOME CONTROLLER IS WORKING!!</h1>");
}