import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { IgrSpreadsheetModule } from "@infragistics/igniteui-react-spreadsheet";

declare module "react" {
  interface CSSProperties {
    "--ig-size"?: "var(--ig-size-small)" | "var(--ig-size-medium)" | "var(--ig-size-large)";
  }
}

[IgrSpreadsheetModule].forEach((module) => module.register());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
