const Wishlist = require('../models/Wishlist');
const escapeRegex = require('../utils/escapeRegex');

async function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const filter = {};


  const [items, total] = await Promise.all([
    Wishlist.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Wishlist.countDocuments(filter),
  ]);

  return { items, total, page, pages: Math.ceil(total / limit) };
}

const getById = (id) => Wishlist.findById(id);
const create = (data) => Wishlist.create(data);
const update = (id, data) => Wishlist.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const remove = (id) => Wishlist.findByIdAndDelete(id);

module.exports = { list, getById, create, update, remove };
