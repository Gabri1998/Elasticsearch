export default function Pagination({ page, total, pageSize, onPrev, onNext }) {
  const totalPages = Math.ceil(total / pageSize); // Total pages

  return (
    <div className="flex justify-between items-center mt-6">
      <span className="text-sm text-gray-500">
        Page {page} of {totalPages || 1}
      </span>

      <div className="flex gap-2">
        <button
          onClick={onPrev} // Go to previous page
          disabled={page === 1} // Disable on first page
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <button
          onClick={onNext} // Go to next page
          disabled={page >= totalPages} // Disable on last page
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
