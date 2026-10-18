const ProductVariant = require('../models/ProductVariant');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.sku = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    ProductVariant.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    ProductVariant.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => ProductVariant.findById(id);
const create = (data) => ProductVariant.create(data);
const update = (id, data) => ProductVariant.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => ProductVariant.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
