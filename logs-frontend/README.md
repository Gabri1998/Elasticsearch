


# Logs Viewer – Frontend (React + Tailwind)

A React-based UI for browsing and searching web logs from the backend API.



## Tech Stack

- React
- React Router
- Tailwind CSS
- Fetch API



## Features

- Search logs by client IP or hostname
- Paginated results
- Auto-refresh every 20 seconds
- Clean layout with reusable components
- Client-side routing
- 404 page handling



## Pages & Components

### Pages

- `/logs` – Main logs view
- `*` – NotFound page

### Components

- `Layout` – Global layout (header + container)
- `LogsTable` – Displays logs in a table
- `Pagination` – Page navigation controls



## API Integration

# The frontend fetches data from:

GET http://127.0.0.1:8000/api/logs

- Example request:

 fetchLogs({ q: "5.123.144.95", page: 1 })

# Tailwind CSS

- Tailwind is used for:

    Layout

    Spacing

    Typography

    Responsive design

- Configured in:

    tailwind.config.js

    postcss.config.js

    src/index.css

# Routing

-Routing is handled via react-router-dom:

<Route path="/logs" element={<LogsPage />} />
<Route path="*" element={<NotFound />} />

# Run Frontend

npm install
npm start

- Frontend will be available at:

http://localhost:3000

