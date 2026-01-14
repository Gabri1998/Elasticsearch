import { useCallback, useEffect, useState } from "react"; // React hooks
import { fetchLogs } from "../api/logs"; // API call helper
import LogsTable from "../components/LogsTable"; // Table component
import Pagination from "../components/Pagination"; // Pagination controls

export default function LogsPage() {
  const [q, setQ] = useState(""); // Search query
  const [page, setPage] = useState(1); // Current page
  const [rows, setRows] = useState([]); // Log rows
  const [total, setTotal] = useState(0); // Total logs count
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch logs from backend
  const load = useCallback(async () => {
    setLoading(true); // Start loading
    try {
      const data = await fetchLogs({ q, page }); // Fetch logs
      setRows(data.data); // Update rows
      setTotal(data.total); // Update total
    } finally {
      setLoading(false); // Stop loading
    }
  }, [q, page]); // Re-run when query or page changes

  useEffect(() => {
    load(); // Load logs on mount and updates
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
          value={q} // Bind query
          onChange={(e) => {
            setPage(1); // Reset to first page
            setQ(e.target.value); // Update query
          }}
        />
      </div>

      {loading && <p className="text-gray-500">Loading…</p>} {/* Loading indicator */}

      {!loading && (
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
