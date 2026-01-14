import { useCallback, useEffect, useState } from "react"; // React hooks
import { fetchLogs } from "../api/logs"; // API call helper
import LogsTable from "../components/LogsTable"; // Table component
import Pagination from "../components/Pagination"; // Pagination controls

export default function LogsPage() {
  const [q, setQ] = useState(""); // Raw search input
  const [debouncedQ, setDebouncedQ] = useState(""); // Debounced search value
  const [page, setPage] = useState(1); // Current page number
  const [rows, setRows] = useState([]); // Log rows
  const [total, setTotal] = useState(0); // Total logs count
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // API error state

  // Debounce search input to avoid excessive API calls
  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedQ(q); // Apply debounced value
      setPage(1); // Reset to first page on new search
    }, 400); // 400ms debounce delay

    return () => clearTimeout(id); // Cleanup timeout
  }, [q]);

  // Fetch logs from backend API
  const load = useCallback(async () => {
    setLoading(true); // Start loading
    setError(null); // Clear previous error

    try {
      const data = await fetchLogs({ q: debouncedQ, page }); // Fetch logs
      setRows(data.data); // Update rows
      setTotal(data.total); // Update total count
    } catch (err) {
      setError(err.message); // Store error message
    } finally {
      setLoading(false); // Stop loading
    }
  }, [debouncedQ, page]);

  // Load logs on mount and when dependencies change
  useEffect(() => {
    load();
  }, [load]);

  // Auto-refresh logs every 20 seconds
  useEffect(() => {
    const id = setInterval(load, 20000); // Refresh interval
    return () => clearInterval(id); // Cleanup on unmount
  }, [load]);

  return (
    <div className="bg-white rounded-lg shadow p-6"> {/* Page container */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold text-green-600">
          Web Logs
        </h2>

        <input
          className="border rounded px-4 py-2 w-full md:w-80" // Search input styling
          placeholder="Search client or hostname"
          value={q} // Bind input value
          onChange={(e) => setQ(e.target.value)} // Update raw query
        />
      </div>

      {error && (
        <div className="mb-4 rounded border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700">
          {error} {/* API error message */}
        </div>
      )}

      {loading && <p className="text-gray-500">Loading…</p>} {/* Loading indicator */}

      {!loading && !error && (
        <>
          <LogsTable rows={rows} /> {/* Logs table */}
          <Pagination
            page={page} // Current page
            total={total} // Total results
            pageSize={20} // Page size
            onPrev={() => setPage(p => p - 1)} // Previous page
            onNext={() => setPage(p => p + 1)} // Next page
          />
        </>
      )}
    </div>
  );
}
