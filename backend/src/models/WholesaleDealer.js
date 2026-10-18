const mongoose = require('mongoose');

const wholesaleDealerSchema = new mongoose.Schema(
  {
    businessName: { type: String, required: true, trim: true },
    ownerName: { type: String, trim: true },
    phone: { type: String, trim: true },
    city: { type: String, trim: true },
    gstNumber: { type: String, trim: true },
    creditLimit: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('WholesaleDealer', wholesaleDealerSchema);
