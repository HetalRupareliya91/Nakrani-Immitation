const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema(
  {
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
    poNumber: { type: String, trim: true },
    totalAmount: { type: Number },
    status: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema);
