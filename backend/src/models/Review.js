const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    rating: { type: Number },
    comment: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);
