const User = require("./models/User");
const Contact = require("./models/Contact");

module.exports = function(req, res, next) {
  req.db = {
    User: User,
    Contact: Contact
  };

  next();
};
