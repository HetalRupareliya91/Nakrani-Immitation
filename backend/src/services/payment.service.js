const Payment = require('../models/Payment');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.method = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    Payment.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Payment.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => Payment.findById(id);
const create = (data) => Payment.create(data);
const update = (id, data) => Payment.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => Payment.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
