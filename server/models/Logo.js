var mongoose = require('mongoose');

var LogoSchema = new mongoose.Schema({
  id: String,
  text: String,
  color: String,
  fontSize: { type: Number, min: 2, max: 100 },
  lastUpdate: { type: Date, default: Date.now },
  backgroundColor: String,
  borderWidth: { type: Number, min: 2, max: 100 },
  borderColor: String,
  borderRadius: { type: Number, min: 2, max: 100 },
  padding: { type: Number, min: 2, max: 100 },
});

module.exports = mongoose.model('Logo', LogoSchema);