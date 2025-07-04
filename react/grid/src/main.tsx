import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

import "@infragistics/igniteui-react-grids/grids/themes/light/bootstrap.css";

declare module "react" {
  interface CSSProperties {
    "--ig-size"?: "var(--ig-size-small)" | "var(--ig-size-medium)" | "var(--ig-size-large)";
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
