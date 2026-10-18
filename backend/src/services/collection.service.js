const Collection = require('../models/Collection');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.name = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    Collection.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Collection.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => Collection.findById(id);
const create = (data) => Collection.create(data);
const update = (id, data) => Collection.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => Collection.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
