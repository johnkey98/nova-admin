import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@nova.io');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-brand-900 to-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 flex items-center justify-center gap-2 text-white">
          <Zap className="text-brand-500" size={28} />
          <span className="text-2xl font-extrabold tracking-tight">
            Nova<span className="text-brand-500">Admin</span>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-5 p-8">
          <div>
            <h1 className="text-xl font-bold">Sign in to your dashboard</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Enter your credentials to access the admin panel.
            </p>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Email</span>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input pl-9"
                placeholder="you@company.com"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Password</span>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input pl-9"
                placeholder="••••••••"
              />
            </div>
          </label>

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading} className="btn-primary w-full py-2.5">
            {loading ? 'Signing in…' : 'Sign in'}
          </button>

          <p className="text-center text-xs text-slate-400">
            Demo credentials are pre-filled — press <b>Sign in</b>.
          </p>
        </form>
      </div>
    </div>
  );
}
