const mongoose = require('mongoose');

const returnRequestSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    reason: { type: String, trim: true },
    status: { type: String, trim: true },
    refundAmount: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ReturnRequest', returnRequestSchema);
