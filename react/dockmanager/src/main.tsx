import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/app";

import { defineCustomElements } from "@infragistics/igniteui-dockmanager/loader";

/* eslint-disable */
declare global {
  namespace JSX {
    // tslint:disable-next-line:interface-name
    interface IntrinsicElements {
      "igc-dockmanager": any;
    }
  }
}
/* eslint-enable */

defineCustomElements();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
