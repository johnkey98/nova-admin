// Deterministic mock data — swap with real API calls when a backend is wired up.

export const revenueSeries = [
  { month: 'Jan', revenue: 18200, orders: 320, profit: 6400 },
  { month: 'Feb', revenue: 21400, orders: 365, profit: 7600 },
  { month: 'Mar', revenue: 19800, orders: 342, profit: 6900 },
  { month: 'Apr', revenue: 24600, orders: 410, profit: 9100 },
  { month: 'May', revenue: 28900, orders: 470, profit: 11200 },
  { month: 'Jun', revenue: 26400, orders: 438, profit: 9800 },
  { month: 'Jul', revenue: 31200, orders: 512, profit: 12400 },
  { month: 'Aug', revenue: 33800, orders: 545, profit: 13700 },
  { month: 'Sep', revenue: 30500, orders: 501, profit: 11800 },
  { month: 'Oct', revenue: 36400, orders: 590, profit: 14900 },
  { month: 'Nov', revenue: 41200, orders: 655, profit: 17200 },
  { month: 'Dec', revenue: 45600, orders: 712, profit: 19300 },
];

export const trafficSources = [
  { name: 'Organic Search', value: 42 },
  { name: 'Direct', value: 24 },
  { name: 'Referral', value: 16 },
  { name: 'Social', value: 12 },
  { name: 'Email', value: 6 },
];

export const categorySales = [
  { category: 'Electronics', sales: 3200 },
  { category: 'Clothing', sales: 2450 },
  { category: 'Home', sales: 1800 },
  { category: 'Sports', sales: 1320 },
  { category: 'Books', sales: 980 },
  { category: 'Toys', sales: 640 },
];

export const USERS = [
  { id: 1, name: 'Ava Thompson', email: 'ava@example.com', role: 'Admin', status: 'Active', joined: '2025-11-02' },
  { id: 2, name: 'Liam Rodriguez', email: 'liam@example.com', role: 'Editor', status: 'Active', joined: '2025-12-14' },
  { id: 3, name: 'Sofia Nguyen', email: 'sofia@example.com', role: 'Viewer', status: 'Inactive', joined: '2026-01-08' },
  { id: 4, name: 'Noah Patel', email: 'noah@example.com', role: 'Editor', status: 'Active', joined: '2026-01-21' },
  { id: 5, name: 'Mia Kowalski', email: 'mia@example.com', role: 'Viewer', status: 'Active', joined: '2026-02-03' },
  { id: 6, name: 'Ethan Kim', email: 'ethan@example.com', role: 'Admin', status: 'Suspended', joined: '2026-02-19' },
  { id: 7, name: 'Isabella Rossi', email: 'bella@example.com', role: 'Editor', status: 'Active', joined: '2026-03-11' },
  { id: 8, name: 'Lucas Meyer', email: 'lucas@example.com', role: 'Viewer', status: 'Inactive', joined: '2026-03-27' },
  { id: 9, name: 'Amara Okafor', email: 'amara@example.com', role: 'Editor', status: 'Active', joined: '2026-04-15' },
  { id: 10, name: 'Jack Wilson', email: 'jack@example.com', role: 'Viewer', status: 'Active', joined: '2026-05-02' },
  { id: 11, name: 'Chloe Dubois', email: 'chloe@example.com', role: 'Editor', status: 'Active', joined: '2026-05-20' },
  { id: 12, name: 'Omar Hassan', email: 'omar@example.com', role: 'Viewer', status: 'Suspended', joined: '2026-06-01' },
  { id: 13, name: 'Ella Novak', email: 'ella@example.com', role: 'Admin', status: 'Active', joined: '2026-06-18' },
  { id: 14, name: 'Daniel Silva', email: 'daniel@example.com', role: 'Editor', status: 'Active', joined: '2026-07-09' },
];

export const PRODUCTS = [
  { id: 101, name: 'Wireless Noise-Canceling Headphones', category: 'Electronics', price: 199.0, stock: 42, rating: 4.7 },
  { id: 102, name: 'Mechanical Keyboard RGB', category: 'Electronics', price: 129.5, stock: 88, rating: 4.6 },
  { id: 103, name: 'Ultrawide Monitor 34"', category: 'Electronics', price: 549.0, stock: 12, rating: 4.8 },
  { id: 104, name: 'Running Shoes Pro', category: 'Sports', price: 89.9, stock: 130, rating: 4.4 },
  { id: 105, name: 'Yoga Mat Premium', category: 'Sports', price: 34.0, stock: 210, rating: 4.3 },
  { id: 106, name: 'Smart Desk Lamp', category: 'Home', price: 45.5, stock: 76, rating: 4.5 },
  { id: 107, name: 'Espresso Machine', category: 'Home', price: 320.0, stock: 18, rating: 4.6 },
  { id: 108, name: 'Cotton Hoodie', category: 'Clothing', price: 54.0, stock: 340, rating: 4.2 },
  { id: 109, name: 'Denim Jacket', category: 'Clothing', price: 78.0, stock: 95, rating: 4.5 },
  { id: 110, name: 'Bestseller Novel Box Set', category: 'Books', price: 62.0, stock: 60, rating: 4.9 },
  { id: 111, name: 'RC Racing Car', category: 'Toys', price: 47.0, stock: 0, rating: 4.1 },
  { id: 112, name: 'Building Blocks 500pc', category: 'Toys', price: 29.0, stock: 150, rating: 4.4 },
];
