// models/visitorModel.js
const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  visitorName: { type: String, required: true },
  visitorId: { type: String, required: true },
  visitorPhone: { type: String, required: true },
  estate: { type: String, required: true },
  houseNumber: { type: String, required: true },
  code: { type: String, required: true }, // 4-digit code
});

module.exports = mongoose.model('Visitor', visitorSchema);

