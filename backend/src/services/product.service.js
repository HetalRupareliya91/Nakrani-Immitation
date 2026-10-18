const Product = require('../models/Product');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.name = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    Product.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Product.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => Product.findById(id);
const create = (data) => Product.create(data);
const update = (id, data) => Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => Product.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
