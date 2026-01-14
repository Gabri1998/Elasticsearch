import React from "react"; // React core
import ReactDOM from "react-dom/client"; // React DOM renderer
import { BrowserRouter } from "react-router-dom"; // Enables client-side routing
import "./index.css"; // Global styles (Tailwind + base CSS)
import App from "./App"; // Root application component

// Create React root using the root div in public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app
root.render(
  <React.StrictMode> {/* Enables additional checks in development */}
    <BrowserRouter> {/* Wrap app with router */}
      <App /> {/* Main application */}
    </BrowserRouter>
  </React.StrictMode>
);
