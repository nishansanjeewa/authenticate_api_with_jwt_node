const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const adminRoute = require('./admin.route');
const clientRoute = require('./client.route');

router.use('/auth',authRoute);
router.use('/admin',adminRoute);
router.use('/client',clientRoute);

module.exports = router;  