const PlatingType = require('../models/PlatingType');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.name = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    PlatingType.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    PlatingType.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => PlatingType.findById(id);
const create = (data) => PlatingType.create(data);
const update = (id, data) => PlatingType.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => PlatingType.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
