import { Routes, Route, Navigate } from "react-router-dom"; // Routing components
import Layout from "./components/Layout"; // Shared page layout (header, container)
import LogsPage from "./pages/LogsPage"; // Main logs page
import NotFound from "./pages/NotFound"; // 404 page

export default function App() {
  return (
    <Layout> {/* Wrap all routes with common layout */}
      <Routes>
        {/* Redirect root URL to /logs */}
        <Route path="/" element={<Navigate to="/logs" replace />} />

        {/* Logs listing page */}
        <Route path="/logs" element={<LogsPage />} />

        {/* Catch-all route for unknown URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
