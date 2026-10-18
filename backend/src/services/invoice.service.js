const Invoice = require('../models/Invoice');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.invoiceNumber = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    Invoice.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Invoice.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => Invoice.findById(id);
const create = (data) => Invoice.create(data);
const update = (id, data) => Invoice.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => Invoice.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
