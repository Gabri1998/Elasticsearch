# Logs Viewer – Frontend (React + Tailwind)

Web UI for browsing and searching logs exposed by the backend Logs API.

---

## Tech Stack
- React
- React Router
- Tailwind CSS
- Fetch API

---

## Main Files (Frontend Logic)

### Entry Point
`src/index.js`
- Bootstraps the React app
- Wraps the app with `BrowserRouter`
- Loads global styles (`index.css`)

---

### App & Routing
`src/App.js`
- Defines client-side routes
- Redirects `/` → `/logs`
- Handles 404 routes

Routes:
- `/logs` → Logs page
- `*` → NotFound page

---

### Pages

`src/pages/LogsPage.jsx`
- Main logs screen
- Manages search state (`q`)
- Manages pagination state (`page`)
- Calls backend API
- Renders table and pagination

`src/pages/NotFound.jsx`
- Displays 404 page for unknown routes

---

### Components

`src/components/Layout.jsx`
- Global layout wrapper
- Header + centered content container

`src/components/LogsTable.jsx`
- Renders logs in a table
- Handles empty state

`src/components/Pagination.jsx`
- Prev / Next pagination controls
- Displays current page and total pages

---

### API Layer

`src/api/logs.js`
- Centralized API fetch logic
- Calls backend endpoint:
  - `GET http://127.0.0.1:8000/api/logs`
- Handles HTTP errors

---

### Styling

`src/index.css`
- Tailwind directives
- Global base styles

`tailwind.config.js`
- Tailwind configuration
- Content paths

`postcss.config.js`
- PostCSS + Tailwind integration

---

## Features
- Search by client IP or hostname
- Paginated results
- Auto-refresh every 20 seconds
- Reusable components
- Client-side routing
- 404 handling

---

## API Usage

Example:
```js
fetchLogs({ q: "5.123.144.95", page: 1 })


## Run Frontend
npm install
npm start
