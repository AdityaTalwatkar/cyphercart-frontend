# CypherCart — Frontend

Frontend user interface and admin dashboard for **CypherCart**, built with **React**, **TypeScript**, and **Vite**. Connects to a live Spring Boot backend backed by **CognoDB**, a managed graph database.

**Backend repo:** https://github.com/AdityaTalwatkar/cyphercart-backend
**Live demo:** https://cyphercart-frontend.vercel.app/

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup](#setup)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Configure the Backend API URL](#3-configure-the-backend-api-url)
  - [4. Run the Development Server](#4-run-the-development-server)
- [Available Scripts](#available-scripts)
- [Error & Loading States](#error--loading-states)
- [Live Demo](#live-demo)

---

## Features

- **Storefront Catalog** — Browse all available products with category filters, prices (INR), and live stock status.
- **Graph-Powered Recommendations** — A recommendations panel surfaces products discovered through CognoDB's multi-hop traversal queries, rather than a simple "same category" filter.
- **Admin Dashboard** — Add, edit, and remove products and manage stock levels through a dedicated management interface.
- **Loading & Empty States** — Skeleton/loading indicators while data is fetched, and clear empty-state messaging when a category or search has no results.
- **Error Handling** — Friendly error messages (rather than a blank screen) if the backend or database is unreachable.

## Tech Stack

- **React** with **TypeScript** and **Vite**
- **Axios** for API communication with the backend
- **React Router** for single-page navigation between Storefront and Admin Dashboard
- **Vercel** for production hosting

## Project Structure

```
cyphercart-frontend/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components (cards, nav, loaders)
│   ├── pages/              # Storefront, Admin Dashboard, Product Detail
│   ├── api/                # Axios client & endpoint definitions
│   ├── types/               # Shared TypeScript interfaces
│   └── App.tsx
├── index.html
├── vite.config.ts
├── vercel.json             # Routing config for React Router on Vercel
└── package.json
```

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AdityaTalwatkar/cyphercart-frontend.git
cd cyphercart-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the Backend API URL

The frontend reads the backend's base URL from an environment variable rather than a hardcoded value. Create a `.env` file in the project root (already covered by `.gitignore`):

```bash
VITE_API_BASE_URL=http://localhost:8080
```

For the production build (e.g. on Vercel), this is set to the deployed backend URL instead.

### 4. Run the Development Server

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default and expects the backend (see the [backend repo](https://github.com/AdityaTalwatkar/cyphercart-backend)) to be running and reachable at the configured API URL.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build a production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Error & Loading States

- API calls show a loading indicator while in flight.
- If the backend is unreachable or returns an error, the UI displays a clear inline message instead of failing silently or showing a blank page.
- Empty catalog or search results show a dedicated "no products found" state rather than an empty grid.

## Live Demo

- **Production application:** https://cyphercart-frontend.vercel.app/
- Deployed automatically from `main` via Vercel.
