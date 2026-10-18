const Banner = require('../models/Banner');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.title = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    Banner.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Banner.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => Banner.findById(id);
const create = (data) => Banner.create(data);
const update = (id, data) => Banner.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => Banner.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
