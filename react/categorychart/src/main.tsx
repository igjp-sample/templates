import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app";
import { IgrCategoryChartModule } from "@infragistics/igniteui-react-charts";

[IgrCategoryChartModule].forEach((module) => module.register());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
