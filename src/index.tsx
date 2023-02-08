import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

import { ThemeProvider } from "app/providers/theme";

const app = document.getElementById("app-root") as HTMLDivElement;
const root = createRoot(app);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
