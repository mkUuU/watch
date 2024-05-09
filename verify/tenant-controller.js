// controllers/tenantController.js
const Tenant = require('../models/tenantModel');
const Visitor = require('../models/visitorModel');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, location, estate, building, floor, houseNumber } = req.body;
    const newTenant = new Tenant({ name, location, estate, building, floor, houseNumber });
    await newTenant.save();
    res.status(201).json({ message: 'Tenant registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.bookVisitor = async (req, res) => {
  try {
    const { visitorName, visitorId, visitorPhone, estate, houseNumber } = req.body;
    const code = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit random code
    const newVisitor = new Visitor({ visitorName, visitorId, visitorPhone, estate, houseNumber, code });
    await newVisitor.save();

    // Logic to send SMS to visitor (this is just a placeholder)
    console.log(`SMS sent to ${visitorPhone} with code ${code}`);

    res.status(201).json({ message: 'Visitor booked successfully!', code });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.cancelVisitor = async (req, res) => {
  try {
    const { visitorId } = req.body;
    await Visitor.findOneAndDelete({ visitorId });
    res.status(200).json({ message: 'Visitor booking canceled.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

