# Nakrani Imitation Jewellery Management System

Full-stack management system for an imitation jewellery business: catalogue
(necklaces, earrings, bangles, rings, mang tikka and more), plating and stone
masters, inventory and stock movements, suppliers and purchase orders,
retail and wholesale customers, orders, payments, GST invoices, shipments,
returns, coupons, offers, reviews and storefront banners.

## Tech stack
- **Backend:** Node.js, Express, MongoDB (Mongoose), Jest
- **Frontend:** React 18, React Router, Axios, Vite

## Structure
```
backend/
  src/models        Mongoose schemas
  src/validators    Request validation middleware
  src/services      Data access with search and pagination
  src/controllers   REST handlers
  src/routes        Routers (auto-mounted under /api)
  tests/            Jest unit tests
frontend/
  src/api           API clients
  src/pages         Admin pages (auto-registered in the sidebar)
```

## Getting started
```bash
cd backend && cp .env.example .env && npm install && npm run dev
cd frontend && npm install && npm run dev
```
API: http://localhost:5000/api - Admin: http://localhost:5173

Every module exposes `GET /api/<module>?search=&page=&limit=`, `GET /:id`,
`POST`, `PUT /:id` and `DELETE /:id`.

## Team
- Hetal Rupareliya (owner)
- fableadtechnolab
- divyeshfablead
