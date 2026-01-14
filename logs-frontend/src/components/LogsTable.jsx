export default function LogsTable({ rows }) {
  if (!rows.length) {
    return <p className="text-gray-500">No logs found.</p>; // Empty state
  }

  return (
    <div className="overflow-x-auto"> {/* Horizontal scroll */}
      <table className="min-w-full border mt-4"> {/* Table */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">Client</th>
            <th className="px-4 py-2 text-left">Hostname</th>
            <th className="px-4 py-2 text-left">Index</th>
            <th className="px-4 py-2 text-left">ID</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r, i) => (
            <tr key={r._id} className={i % 2 ? "bg-gray-50" : ""}> {/* Zebra rows */}
              <td className="px-4 py-2 font-mono">{r._source.client}</td>
              <td className="px-4 py-2">{r._source.hostname}</td>
              <td className="px-4 py-2 text-gray-500">{r._index}</td>
              <td className="px-4 py-2 text-xs font-mono text-gray-400">{r._id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
