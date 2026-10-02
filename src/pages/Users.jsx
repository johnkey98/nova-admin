import { useMemo, useState } from 'react';
import { ArrowUpDown, Search, Trash2 } from 'lucide-react';
import { USERS } from '../data/mock.js';

const PAGE_SIZE = 8;
const STATUS_STYLE = {
  Active: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
  Inactive: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
  Suspended: 'bg-red-50 text-red-600 dark:bg-red-900/40 dark:text-red-400',
};

export default function Users() {
  const [rows, setRows] = useState(USERS);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState('name');
  const [asc, setAsc] = useState(true);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const list = rows.filter(
      (u) => !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.role.toLowerCase().includes(q)
    );
    return [...list].sort((a, b) => {
      const va = String(a[sortKey]).toLowerCase();
      const vb = String(b[sortKey]).toLowerCase();
      return asc ? va.localeCompare(vb) : vb.localeCompare(va);
    });
  }, [rows, query, sortKey, asc]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const toggleSort = (key) => {
    if (key === sortKey) setAsc((a) => !a);
    else {
      setSortKey(key);
      setAsc(true);
    }
  };

  const removeUser = (id) => setRows((r) => r.filter((u) => u.id !== id));

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Users</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {filtered.length} of {rows.length} users
          </p>
        </div>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className="input w-full pl-9 sm:w-72"
            placeholder="Search name, email, role…"
          />
        </div>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <tr>
              {['name', 'email', 'role', 'status', 'joined'].map((key) => (
                <th key={key} className="cursor-pointer px-5 py-3 font-semibold" onClick={() => toggleSort(key)}>
                  <span className="inline-flex items-center gap-1 capitalize">
                    {key} <ArrowUpDown size={12} className={sortKey === key ? 'text-brand-600' : 'opacity-30'} />
                  </span>
                </th>
              ))}
              <th className="px-5 py-3 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {visible.map((u) => (
              <tr key={u.id} className="transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="flex items-center gap-3 px-5 py-3.5 font-medium">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=4f46e5&color=fff&size=32`}
                    alt=""
                    className="h-8 w-8 rounded-full"
                  />
                  {u.name}
                </td>
                <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400">{u.email}</td>
                <td className="px-5 py-3.5">{u.role}</td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLE[u.status]}`}>
                    {u.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400">{u.joined}</td>
                <td className="px-5 py-3.5 text-right">
                  <button
                    onClick={() => removeUser(u.id)}
                    className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/30"
                    title="Delete user"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-slate-400">
                  No users match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500">
          Page <b>{current}</b> of {totalPages}
        </span>
        <div className="flex gap-2">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={current === 1} className="card px-3 py-1.5 disabled:opacity-40">
            Previous
          </button>
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={current === totalPages} className="card px-3 py-1.5 disabled:opacity-40">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
