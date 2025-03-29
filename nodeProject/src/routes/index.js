const express = require('express');
const passengerRoutes = require('./passengerRoutes');

const router = express.Router();

router.use('/passengers', passengerRoutes);

module.exports = router;
