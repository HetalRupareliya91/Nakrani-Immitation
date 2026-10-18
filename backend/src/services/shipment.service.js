const Shipment = require('../models/Shipment');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};
  if (query.search) filter.courier = new RegExp(escapeRegex(query.search), 'i');

  const [items, total] = await Promise.all([
    Shipment.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Shipment.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => Shipment.findById(id);
const create = (data) => Shipment.create(data);
const update = (id, data) => Shipment.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => Shipment.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
