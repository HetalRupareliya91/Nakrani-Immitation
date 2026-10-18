const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: { type: String, required: true, trim: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    amount: { type: Number },
    gstAmount: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Invoice', invoiceSchema);
