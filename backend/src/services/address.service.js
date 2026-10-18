const Address = require('../models/Address');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.line1 = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    Address.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Address.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => Address.findById(id);
const create = (data) => Address.create(data);
const update = (id, data) => Address.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => Address.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
