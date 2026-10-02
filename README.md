# ⚡ Nova Admin — Modern Admin Dashboard

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss&logoColor=white)

A production-grade **admin dashboard** built with React 18, Vite, Tailwind CSS and Recharts. It ships with a complete authentication flow, interactive analytics, a searchable/sortable/paginated users table, a product catalog with filtering, and a persistent dark/light theme — everything you expect from a real back-office application, in a clean and maintainable codebase.

The project is intentionally structured the way a professional team would organize it: isolated pages, reusable components, context-based state management, and mock data kept in a single module so it can be swapped for a real API with minimal effort. Every page is fully responsive, from mobile up to ultra-wide screens.

<!-- 📸 Add screenshots here, e.g.: ![Dashboard](screenshots/dashboard.png) -->

## ✨ Features

- **Authentication flow** — protected routes, session persistence via `localStorage`, graceful logout (mock JWT, ready to be wired to a real backend).
- **Analytics dashboard** — KPI stat cards plus three interactive Recharts visualizations: gradient area chart (revenue vs profit), donut chart (traffic sources) and bar chart (sales by category).
- **Users management** — live search, click-to-sort columns, client-side pagination and row deletion with optimistic UI.
- **Product catalog** — category filter, text search, stock badges and rating display in a responsive card grid.
- **Settings page** — profile form, notification toggles and theme control.
- **Dark / light mode** — respects OS preference, persists user choice, toggled instantly with Tailwind `class` strategy.
- **Responsive sidebar layout** — collapsible mobile drawer with overlay, sticky topbar, avatar menu.

## 🧱 Tech Stack

| Layer            | Technology                              |
| ---------------- | --------------------------------------- |
| Framework        | React 18                                |
| Build tool       | Vite 5                                  |
| Styling          | Tailwind CSS 3 (+ custom design tokens) |
| Charts           | Recharts 2                              |
| Routing          | React Router 6                          |
| Icons            | lucide-react                            |
| State            | React Context + hooks                   |

## 🚀 Getting Started

### Prerequisites

- Node.js **18+**
- npm 9+ (or pnpm / yarn)

### Install & run

```bash
# 1. Clone the repository
git clone https://github.com/johnkey98/nova-admin.git
cd nova-admin

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
# → http://localhost:5173
```

### Demo credentials

| Email            | Password   |
| ---------------- | ---------- |
| `admin@nova.io`  | `admin123` |

### Production build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## 📂 Project Structure

```
nova-admin/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── src/
    ├── main.jsx              # App bootstrap (router + providers)
    ├── App.jsx               # Route table + route guard
    ├── index.css             # Tailwind layers + component classes
    ├── context/
    │   ├── AuthContext.jsx   # Session state, login/logout
    │   └── ThemeContext.jsx  # Dark/light mode with persistence
    ├── components/
    │   ├── Layout.jsx        # Sidebar + topbar + outlet
    │   └── StatCard.jsx      # KPI card
    ├── pages/
    │   ├── Login.jsx         # Auth screen
    │   ├── Dashboard.jsx     # Charts + KPIs
    │   ├── Users.jsx         # Search/sort/paginate/delete
    │   ├── Products.jsx      # Catalog grid + filters
    │   └── Settings.jsx      # Profile & preferences
    └── data/
        └── mock.js           # Deterministic mock dataset
```

## 🔌 Connecting a Real API

All data currently comes from `src/data/mock.js`. To plug in a backend:

1. Replace the `setTimeout` inside `AuthContext.login()` with a `fetch` to your `/auth/login` endpoint and store the returned token.
2. Swap `USERS` / `PRODUCTS` imports for `useEffect` + `fetch` calls (or React Query) inside the pages.
3. Optionally add an axios instance with an auth interceptor in `src/lib/api.js`.

Because state flows exclusively through contexts and local page state, no other structural changes are required.

## 🗺 Roadmap

- [ ] Role-based access control (Admin / Editor / Viewer)
- [ ] Charts drill-down with date-range picker
- [ ] CSV export for the users table
- [ ] Unit tests with Vitest + React Testing Library
- [ ] i18n support

## 🤝 Contributing

Issues and pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

Distributed under the [MIT License](LICENSE).

---

Built with ❤️ by [John Key](https://github.com/johnkey98)
