const StoneType = require('../models/StoneType');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.name = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    StoneType.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    StoneType.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => StoneType.findById(id);
const create = (data) => StoneType.create(data);
const update = (id, data) => StoneType.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => StoneType.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
