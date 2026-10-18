const { validateWholesaleDealer } = require('../src/validators/wholesale-dealer.validator');

function run(method, body) {
  const result = { status: 200, payload: null, called: false };
  const res = {
    status(code) { result.status = code; return this; },
    json(data) { result.payload = data; return this; },
  };
  validateWholesaleDealer({ method, body }, res, () => { result.called = true; });
  return result;
}

describe('Wholesale Dealers validator', () => {
  test('rejects create without businessName', () => {
    const r = run('POST', {});
    expect(r.status).toBe(422);
    expect(r.called).toBe(false);
  });

  test('accepts create with businessName', () => {
    const r = run('POST', { businessName: '1' });
    expect(r.called).toBe(true);
  });

  test('allows partial updates', () => {
    const r = run('PUT', {});
    expect(r.called).toBe(true);
  });
});
