import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function Settings() {
  const { dark, toggle } = useTheme();
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Full-stack developer building clean, production-grade web products.',
    notifications: true,
    weeklyReport: false,
  });

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">Settings</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Manage your profile and application preferences.</p>
      </div>

      <form onSubmit={handleSave} className="card space-y-5 p-6">
        <h2 className="font-bold">Profile</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Full name</span>
            <input className="input" value={form.name} onChange={set('name')} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Email</span>
            <input type="email" className="input" value={form.email} onChange={set('email')} />
          </label>
        </div>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Bio</span>
          <textarea rows={3} className="input resize-none" value={form.bio} onChange={set('bio')} />
        </label>

        <h2 className="border-t border-slate-200 pt-5 font-bold dark:border-slate-800">Preferences</h2>

        <label className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Dark mode</p>
            <p className="text-xs text-slate-500">Use the dark theme across the dashboard</p>
          </div>
          <button type="button" onClick={toggle} className="btn-primary" aria-pressed={dark}>
            {dark ? 'Enabled' : 'Disabled'}
          </button>
        </label>

        <label className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Email notifications</p>
            <p className="text-xs text-slate-500">Get notified about important account activity</p>
          </div>
          <input type="checkbox" checked={form.notifications} onChange={set('notifications')} className="h-5 w-5 accent-brand-600" />
        </label>

        <label className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Weekly analytics report</p>
            <p className="text-xs text-slate-500">Receive a performance summary every Monday</p>
          </div>
          <input type="checkbox" checked={form.weeklyReport} onChange={set('weeklyReport')} className="h-5 w-5 accent-brand-600" />
        </label>

        <div className="flex items-center gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
          <button type="submit" className="btn-primary">Save changes</button>
          {saved && <span className="text-sm font-medium text-emerald-600">✓ Saved successfully</span>}
        </div>
      </form>
    </div>
  );
}
