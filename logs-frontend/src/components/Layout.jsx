import { Link } from "react-router-dom"; // Navigation link

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100"> {/* App background */}
      <header className="bg-white shadow"> {/* Header */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-xl font-bold text-red-800">
            Log Viewer
          </h1>

          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:underline">
              Logs
            </Link> {/* Navigation link */}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {children} {/* Render routed pages */}
      </main>
    </div>
  );
}
