const { getAllPassenger, createPassenger } = require('../services/passengerService');

exports.getPassengers = async (req, res) => {
    try {
        const passengers = await getAllPassenger();
        res.status(200).json(passengers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

exports.addPassenger = async (req, res) => {
    try {
        console.log("got it ????");
        
        const newPassenger = await createPassenger(req.body);
        res.status(201).json(newPassenger);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};
