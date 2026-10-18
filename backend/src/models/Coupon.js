const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, trim: true },
    discount: { type: Number },
    minAmount: { type: Number },
    expiresAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Coupon', couponSchema);
