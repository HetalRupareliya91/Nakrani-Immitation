const { validateAddress } = require('../src/validators/address.validator');

function run(method, body) {
  const result = { status: 200, payload: null, called: false };
  const res = {
    status(code) { result.status = code; return this; },
    json(data) { result.payload = data; return this; },
  };
  validateAddress({ method, body }, res, () => { result.called = true; });
  return result;
}

describe('Addresses validator', () => {
  test('rejects create without customerId', () => {
    const r = run('POST', {});
    expect(r.status).toBe(422);
    expect(r.called).toBe(false);
  });

  test('accepts create with customerId', () => {
    const r = run('POST', { customerId: '1' });
    expect(r.called).toBe(true);
  });

  test('allows partial updates', () => {
    const r = run('PUT', {});
    expect(r.called).toBe(true);
  });
});
