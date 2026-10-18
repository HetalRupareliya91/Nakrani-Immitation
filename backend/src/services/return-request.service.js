const ReturnRequest = require('../models/ReturnRequest');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.reason = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    ReturnRequest.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    ReturnRequest.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => ReturnRequest.findById(id);
const create = (data) => ReturnRequest.create(data);
const update = (id, data) => ReturnRequest.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => ReturnRequest.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
