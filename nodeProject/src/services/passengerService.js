const passenger = require('../models/passengerModel');

const getAllPassenger = async () => {
    return await passenger.findAll();
};

const createPassenger = async (passengerData) => {
    return await passenger.create(passengerData);
};

module.exports = { getAllPassenger, createPassenger };
