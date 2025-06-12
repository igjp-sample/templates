import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

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
