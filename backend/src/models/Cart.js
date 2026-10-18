const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);
