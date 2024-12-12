import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app";
import { IgrExcelModule } from "@infragistics/igniteui-react-excel";
import { IgrSpreadsheetModule } from "@infragistics/igniteui-react-spreadsheet";

[IgrExcelModule, IgrSpreadsheetModule].forEach((module) => module.register());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
