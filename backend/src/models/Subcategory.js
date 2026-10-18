const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, trim: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    image: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Subcategory', subcategorySchema);
