const REQUIRED = ['orderId'];
const NUMERIC = ['quantity', 'price'];

function validateOrderItem(req, res, next) {
  const body = req.body || {};
  const errors = [];

  if (req.method === 'POST') {
    REQUIRED.forEach((field) => {
      if (body[field] === undefined || body[field] === '') errors.push(field + ' is required');
    });
  }

  NUMERIC.forEach((field) => {
    if (body[field] !== undefined && body[field] !== '' && Number.isNaN(Number(body[field]))) {
      errors.push(field + ' must be a number');
    }
  });

  if (errors.length) return res.status(422).json({ success: false, errors });
  return next();
}

module.exports = { validateOrderItem };
