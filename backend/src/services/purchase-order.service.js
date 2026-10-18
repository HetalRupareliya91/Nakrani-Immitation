const PurchaseOrder = require('../models/PurchaseOrder');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.poNumber = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    PurchaseOrder.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    PurchaseOrder.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => PurchaseOrder.findById(id);
const create = (data) => PurchaseOrder.create(data);
const update = (id, data) => PurchaseOrder.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => PurchaseOrder.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
