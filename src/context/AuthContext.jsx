import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const STORAGE_KEY = 'nova_admin_session';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
    } catch {
      return null;
    }
  });

  /**
   * Mock authentication. Replace the resolve block with a real
   * `fetch('/api/auth/login', ...)` call against your backend.
   */
  const login = (email, password) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.trim().toLowerCase() === 'admin@nova.io' && password === 'admin123') {
          const session = {
            name: 'John Key',
            email: 'admin@nova.io',
            role: 'Administrator',
            token: 'mock-jwt-' + Math.random().toString(36).slice(2),
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
          setUser(session);
          resolve(session);
        } else {
          reject(new Error('Invalid email or password. Try admin@nova.io / admin123'));
        }
      }, 600);
    });

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
