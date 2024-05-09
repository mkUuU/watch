// controllers/guardController.js
const Tenant = require('../models/tenantModel');
const Visitor = require('../models/visitorModel');

exports.getAllTenants = async (req, res) => {
  try {
    const tenants = await Tenant.find({});
    res.status(200).json({ tenants });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.confirmVisitor = async (req, res) => {
  try {
    const { code } = req.body;
    const visitor = await Visitor.findOne({ code });
    if (visitor) {
      res.status(200).json({ message: 'Visitor confirmed', visitor });
    } else {
      res.status(404).json({ message: 'Visitor not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

