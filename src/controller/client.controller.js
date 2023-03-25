module.exports.clientFunction = async function (req, res) {
  res.status(200).send({
    message: "You can access client function",
  });
}