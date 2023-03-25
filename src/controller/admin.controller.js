module.exports.adminFunction = async function (req, res) {
  res.status(200).send({
    message: "You can access admin function",
  });
}