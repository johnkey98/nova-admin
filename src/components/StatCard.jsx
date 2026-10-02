export default function StatCard({ title, value, change, icon: Icon, accent = 'text-brand-600', bg = 'bg-brand-50 dark:bg-brand-900/30' }) {
  const positive = !change.startsWith('-');
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
          <p className="mt-2 text-2xl font-extrabold tracking-tight">{value}</p>
          <p className={`mt-1 text-xs font-semibold ${positive ? 'text-emerald-600' : 'text-red-500'}`}>
            {change} vs last month
          </p>
        </div>
        <div className={`rounded-xl p-3 ${bg}`}>
          <Icon size={22} className={accent} />
        </div>
      </div>
    </div>
  );
}
