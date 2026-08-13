```markdown
# CypherCart Frontend - React & Vite Storefront

A modern, responsive single-page e-commerce storefront built with **React**, **Vite**, and **Tailwind CSS**, designed to showcase real-time graph-powered product recommendations driven by the CypherCart backend and CognoDB.

---

## 🚀 Key Features

* **Dynamic Storefront Catalog:** Browse all available tech gadgets, soundbars, mice, and accessories fetched live from the backend API.
* **Graph Recommendation Engine:** Interactive product detail pages featuring the **"Customers Who Bought This Also Bought"** cross-sell section powered by multi-hop graph traversal.
* **Developer Graph Inspector:** An interactive toggle on product pages displaying the live Cypher query running in real time for technical reviewers.
* **Admin Dashboard:** Administrative interface for managing the catalog and executing backend operations.

---

## 🛠️ Tech Stack

* **Framework:** React 18+ (with Vite)
* **Styling:** Tailwind CSS / Modern CSS
* **HTTP Client:** Axios
* **Routing:** React Router DOM

---

## ⚙️ Getting Started & Local Setup

### 1. Prerequisites
* Node.js (v18 or higher recommended)
* npm or yarn

### 2. Configure Environment Variables
Create a `.env` file in the root of your frontend directory to point to your Spring Boot backend API:

```env
VITE_API_BASE_URL=http://localhost:8080/api

```

### 3. Install Dependencies and Run

Clone the repository, install the dependencies, and start the development server:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

```

The application will typically run locally on `http://localhost:5173`.

---

## 📦 Build for Production

To build the optimized static production bundle:

```bash
npm run build

```

The compiled files will be located in the `dist/` directory, ready for deployment on platforms like Vercel or Netlify.

```

```