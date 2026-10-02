import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import StatCard from '../components/StatCard.jsx';
import { revenueSeries, trafficSources, categorySales } from '../data/mock.js';

const PIE_COLORS = ['#4f46e5', '#22c55e', '#f59e0b', '#ec4899', '#06b6d4'];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">Dashboard</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Real-time overview of your store performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Revenue" value="$367,820" change="+18.2%" icon={DollarSign} />
        <StatCard title="Orders" value="5,860" change="+12.4%" icon={ShoppingCart} accent="text-emerald-600" bg="bg-emerald-50 dark:bg-emerald-900/30" />
        <StatCard title="Active Users" value="2,431" change="+7.1%" icon={Users} accent="text-amber-600" bg="bg-amber-50 dark:bg-amber-900/30" />
        <StatCard title="Conversion Rate" value="3.42%" change="-0.8%" icon={TrendingUp} accent="text-pink-600" bg="bg-pink-50 dark:bg-pink-900/30" />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="card p-5 xl:col-span-2">
          <h2 className="mb-4 font-bold">Revenue vs Profit</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueSeries}>
              <defs>
                <linearGradient id="gRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#94a3b833" />
              <XAxis dataKey="month" fontSize={12} />
              <YAxis fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
              <Legend />
              <Area type="monotone" dataKey="revenue" stroke="#4f46e5" fill="url(#gRev)" strokeWidth={2} name="Revenue" />
              <Area type="monotone" dataKey="profit" stroke="#22c55e" fill="url(#gProfit)" strokeWidth={2} name="Profit" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-5">
          <h2 className="mb-4 font-bold">Traffic Sources</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={trafficSources} dataKey="value" nameKey="name" innerRadius={60} outerRadius={95} paddingAngle={3}>
                {trafficSources.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card p-5">
        <h2 className="mb-4 font-bold">Sales by Category</h2>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={categorySales}>
            <CartesianGrid strokeDasharray="3 3" stroke="#94a3b833" />
            <XAxis dataKey="category" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Bar dataKey="sales" fill="#4f46e5" radius={[6, 6, 0, 0]} name="Units sold" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
