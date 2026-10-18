const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, trim: true },
    code: { type: String, trim: true },
    sortOrder: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Size', sizeSchema);
