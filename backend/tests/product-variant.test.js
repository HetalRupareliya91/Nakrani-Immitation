const { validateProductVariant } = require('../src/validators/product-variant.validator');

function run(method, body) {
  const result = { status: 200, payload: null, called: false };
  const res = {
    status(code) { result.status = code; return this; },
    json(data) { result.payload = data; return this; },
  };
  validateProductVariant({ method, body }, res, () => { result.called = true; });
  return result;
}

describe('Product Variants validator', () => {
  test('rejects create without productId', () => {
    const r = run('POST', {});
    expect(r.status).toBe(422);
    expect(r.called).toBe(false);
  });

  test('accepts create with productId', () => {
    const r = run('POST', { productId: '1' });
    expect(r.called).toBe(true);
  });

  test('allows partial updates', () => {
    const r = run('PUT', {});
    expect(r.called).toBe(true);
  });
});
