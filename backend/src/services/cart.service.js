const Cart = require('../models/Cart');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};


  const [items, total] = await Promise.all([
    Cart.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Cart.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => Cart.findById(id);
const create = (data) => Cart.create(data);
const update = (id, data) => Cart.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => Cart.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
