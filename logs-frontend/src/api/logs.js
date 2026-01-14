export async function fetchLogs({ q, page }) {
  const params = new URLSearchParams({ q, page }); // Build query string

  const res = await fetch(
    "http://127.0.0.1:8000/api/logs?" + params.toString() // Call backend API
  );

  if (!res.ok) {
    const text = await res.text(); // Read error response
    throw new Error(text); // Throw error
  }

  return res.json(); // Return JSON data
}
