const Customer = require('../models/Customer');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.name = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    Customer.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Customer.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => Customer.findById(id);
const create = (data) => Customer.create(data);
const update = (id, data) => Customer.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => Customer.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
