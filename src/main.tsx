import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { inject } from "@vercel/analytics";               // Web Analytics
import { SpeedInsights } from "@vercel/speed-insights/react"; // Speed Insights

// Run Vercel Analytics once
inject();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SpeedInsights />
    <App />
  </React.StrictMode>
);
