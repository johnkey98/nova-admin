import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Users, Package, Settings, Moon, Sun, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

const NAV = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/users', label: 'Users', icon: Users },
  { to: '/products', label: 'Products', icon: Package },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const { dark, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-slate-900 text-slate-300 transition-transform duration-200 lg:static lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-800 px-5">
          <span className="text-lg font-extrabold tracking-tight text-white">
            Nova<span className="text-brand-500">Admin</span>
          </span>
          <button className="lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-1 p-3">
          {NAV.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand-600 text-white'
                    : 'hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute inset-x-0 bottom-0 border-t border-slate-800 p-4">
          <div className="flex items-center gap-3">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'A')}&background=4f46e5&color=fff`}
              alt="avatar"
              className="h-9 w-9 rounded-full"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">{user?.name}</p>
              <p className="truncate text-xs text-slate-400">{user?.role}</p>
            </div>
            <button onClick={logout} className="text-slate-400 hover:text-red-400" title="Log out">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-20 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-900 sm:px-6">
          <button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>
          <div className="hidden text-sm text-slate-500 dark:text-slate-400 sm:block">
            Welcome back, <span className="font-semibold">{user?.name}</span> 👋
          </div>
          <button
            onClick={toggle}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            title="Toggle theme"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
