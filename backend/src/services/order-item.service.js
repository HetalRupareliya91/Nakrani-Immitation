const OrderItem = require('../models/OrderItem');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};


  const [items, total] = await Promise.all([
    OrderItem.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    OrderItem.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => OrderItem.findById(id);
const create = (data) => OrderItem.create(data);
const update = (id, data) => OrderItem.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => OrderItem.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
