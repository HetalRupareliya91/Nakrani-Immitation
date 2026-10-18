const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    image: { type: String, trim: true },
    link: { type: String, trim: true },
    sortOrder: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Banner', bannerSchema);
