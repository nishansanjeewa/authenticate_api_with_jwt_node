const { userType } = require('../config/user.config');
const  helper = require('../helper/common.helper');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const data = helper.verifyJwtToken(token);
    if (!data || data.data?.userType != userType.client) {
      return res.status(401).send({
        error: "Unauthenticated",
      });
    }
    req.user = data;
    next();
  } catch (e) {
    return res.status(401).send({
      error: "Unauthenticated",
    });
  }
};