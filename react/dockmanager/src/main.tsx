import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
