// eslint-disable-next-line no-unused-vars
module.exports = function errorHandler(err, req, res, next) {
  if (err.name === 'CastError') {
    return res.status(400).json({ success: false, message: 'Invalid id' });
  }
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      success: false,
      errors: Object.values(err.errors).map((e) => e.message),
    });
  }
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: 'Duplicate value',
      fields: Object.keys(err.keyValue || {}),
    });
  }
  console.error(err);
  return res.status(500).json({ success: false, message: 'Internal server error' });
};
