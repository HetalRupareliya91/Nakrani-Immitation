const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    email: { type: String, trim: true },
    city: { type: String, trim: true },
    gstNumber: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Supplier', supplierSchema);
