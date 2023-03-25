const express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser');
const mongoose = require('./src/database');

const app = express();
app.use(bodyParser.json());
/** Routes **/
const allRouters = require("./src/routes/index");
app.use("/api", allRouters);

app.listen(process.env.PORT, () => {
  console.log(`server started in ${process.env.PORT}`);
  mongoose.connect();
});