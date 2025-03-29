const express = require('express');
const { getPassengers, addPassenger } = require('../controllers/passengerController');

const router = express.Router();

router.get('/', getPassengers);
router.post('/', addPassenger);

module.exports = router;
