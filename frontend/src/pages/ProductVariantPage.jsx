import { useEffect, useState } from 'react';
import api from '../api/product-variant.api';

export const meta = { path: '/product-variants', title: 'Product Variants' };

const FIELDS = ['productId', 'sku', 'color', 'size', 'price', 'stock'];
const emptyForm = () => Object.fromEntries(FIELDS.map((f) => [f, '']));

export default function ProductVariantPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm());
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const load = async () => {
    try {
      const res = await api.list({ search });
      setItems(res.data.items || []);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load Product Variants');
    }
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.create(form);
      setForm(emptyForm());
      load();
    } catch (err) {
      setError((err.response?.data?.errors || []).join(', ') || 'Save failed');
    }
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this record?')) return;
    await api.remove(id);
    load();
  };

  return (
    <section>
      <h2>{meta.title}</h2>
      {error && <p className="error">{error}</p>}

      <div className="toolbar">
        <input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="button" onClick={load}>Search</button>
      </div>

      <form className="form" onSubmit={submit}>
        {FIELDS.map((f) => (
          <input
            key={f}
            placeholder={f}
            value={form[f]}
            onChange={(e) => setForm({ ...form, [f]: e.target.value })}
          />
        ))}
        <button type="submit">Add</button>
      </form>

      <table>
        <thead>
          <tr>
            {FIELDS.map((f) => <th key={f}>{f}</th>)}
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              {FIELDS.map((f) => <td key={f}>{String(item[f] ?? '')}</td>)}
              <td><button type="button" onClick={() => remove(item._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
