const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    courier: { type: String, trim: true },
    trackingNumber: { type: String, trim: true },
    status: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Shipment', shipmentSchema);
