const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.createJwtToken = function createJwtToken(data) {
    return jwt.sign({
        data
    }, process.env.JWT_SECRET)
}

module.exports.verifyJwtToken = function createJwtToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports.enryptPassword = function (password) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

module.exports.comparePassword = function (password, encryptPassword) {
    return bcrypt.compareSync(password, encryptPassword);
}