const { validateProduct } = require('../src/validators/product.validator');

function run(method, body) {
  const result = { status: 200, payload: null, called: false };
  const res = {
    status(code) { result.status = code; return this; },
    json(data) { result.payload = data; return this; },
  };
  validateProduct({ method, body }, res, () => { result.called = true; });
  return result;
}

describe('Products validator', () => {
  test('rejects create without name', () => {
    const r = run('POST', {});
    expect(r.status).toBe(422);
    expect(r.called).toBe(false);
  });

  test('accepts create with name', () => {
    const r = run('POST', { name: '1' });
    expect(r.called).toBe(true);
  });

  test('allows partial updates', () => {
    const r = run('PUT', {});
    expect(r.called).toBe(true);
  });
});
