const service = require('../services/material.service');
const asyncHandler = require('../utils/asyncHandler');

exports.list = asyncHandler(async (req, res) => {
  const data = await service.list(req.query);
  res.json({ success: true, ...data });
});

exports.get = asyncHandler(async (req, res) => {
  const item = await service.getById(req.params.id);
  if (!item) return res.status(404).json({ success: false, message: 'Materials record not found' });
  return res.json({ success: true, data: item });
});

exports.create = asyncHandler(async (req, res) => {
  const item = await service.create(req.body);
  res.status(201).json({ success: true, data: item });
});

exports.update = asyncHandler(async (req, res) => {
  const item = await service.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ success: false, message: 'Materials record not found' });
  return res.json({ success: true, data: item });
});

exports.remove = asyncHandler(async (req, res) => {
  const item = await service.remove(req.params.id);
  if (!item) return res.status(404).json({ success: false, message: 'Materials record not found' });
  return res.json({ success: true, message: 'Deleted' });
});
