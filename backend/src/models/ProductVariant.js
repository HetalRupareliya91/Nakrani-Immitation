const mongoose = require('mongoose');

const productVariantSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    sku: { type: String, trim: true },
    color: { type: String, trim: true },
    size: { type: String, trim: true },
    price: { type: Number },
    stock: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ProductVariant', productVariantSchema);
