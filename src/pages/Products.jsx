import { useMemo, useState } from 'react';
import { Package, Search, Star } from 'lucide-react';

export default function Products() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(ITEMS.map((p) => p.category))], []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return ITEMS.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (!q || p.name.toLowerCase().includes(q))
    );
  }, [query, category]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Products</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{filtered.length} products in catalog</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="input sm:w-44">
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input w-full pl-9 sm:w-64"
              placeholder="Search products…"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filtered.map((p) => (
          <div key={p.id} className="card group p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className="mb-3 flex items-start justify-between">
              <div className="rounded-xl bg-brand-50 p-3 dark:bg-brand-900/30">
                <Package className="text-brand-600" size={22} />
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-500">
                <Star size={14} className="fill-amber-400 text-amber-400" /> {p.rating}
              </span>
            </div>
            <h3 className="font-bold leading-snug">{p.name}</h3>
            <p className="mt-0.5 text-xs uppercase tracking-wide text-slate-400">{p.category}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-extrabold">${p.price.toFixed(2)}</span>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  p.stock > 0
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400'
                    : 'bg-red-50 text-red-600 dark:bg-red-900/40 dark:text-red-400'
                }`}
              >
                {p.stock > 0 ? `${p.stock} in stock` : 'Out of stock'}
              </span>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-slate-400">No products found.</p>
        )}
      </div>
    </div>
  );
}

import { PRODUCTS as ITEMS } from '../data/mock.js';
