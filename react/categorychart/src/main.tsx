import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { IgrCategoryChartModule } from "@infragistics/igniteui-react-charts";

declare module "react" {
  interface CSSProperties {
    "--ig-size"?: "var(--ig-size-small)" | "var(--ig-size-medium)" | "var(--ig-size-large)";
  }
}

[IgrCategoryChartModule].forEach((module) => module.register());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
