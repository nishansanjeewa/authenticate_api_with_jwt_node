const { body, validationResult } = require("express-validator");
const User = require("../models/user.model");
const helper = require('../helper/common.helper');

module.exports.login = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array(),
    });
  }
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user || !helper.comparePassword(password, user.password)) {
        throw Error("Pleasse check your email or password");
      }
      return user;
    })
    .then((user) => {
      const userD = {
        _id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType
      }
      const token = helper.createJwtToken(userD);
      return res.status(200).send({
        message: "User login succesfully",
        token: token
      });
    })
    .catch((e) => {
      return res.status(500).send({
        message: e.message,
      });
    });
};

module.exports.validateLogin = function () {
  return [
    body("email").exists().isEmail(),
    body("password").exists().isLength({
      min: 6,
      max: 15,
    }),
  ];
}