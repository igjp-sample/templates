import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/app";
import { IgrExcelModule } from "@infragistics/igniteui-react-excel";
import { IgrSpreadsheetModule } from "@infragistics/igniteui-react-spreadsheet";

[IgrExcelModule, IgrSpreadsheetModule].forEach((module) => module.register());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
