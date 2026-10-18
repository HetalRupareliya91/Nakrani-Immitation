const Staff = require('../models/Staff');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.name = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    Staff.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Staff.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => Staff.findById(id);
const create = (data) => Staff.create(data);
const update = (id, data) => Staff.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => Staff.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
