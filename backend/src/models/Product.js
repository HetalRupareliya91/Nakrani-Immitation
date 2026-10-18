const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    sku: { type: String, trim: true },
    price: { type: Number },
    mrp: { type: Number },
    stock: { type: Number },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    plating: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
