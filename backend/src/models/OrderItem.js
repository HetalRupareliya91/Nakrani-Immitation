const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number },
    price: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('OrderItem', orderItemSchema);
