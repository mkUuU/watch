// models/tenantModel.js
const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  estate: { type: String, required: true },
  building: { type: String, required: true },
  floor: { type: Number, required: true },
  houseNumber: { type: String, required: true },
});

module.exports = mongoose.model('Tenant', tenantSchema);

