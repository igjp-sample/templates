import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { defineCustomElements } from "@infragistics/igniteui-dockmanager/loader";
import type { IgcDockManagerComponent } from "@infragistics/igniteui-dockmanager";

declare module "react" {
  interface CSSProperties {
    "--ig-size"?: "var(--ig-size-small)" | "var(--ig-size-medium)" | "var(--ig-size-large)";
  }
}

// Add custom element type for JSX
declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "igc-dockmanager": React.DetailedHTMLProps<React.HTMLAttributes<IgcDockManagerComponent>, IgcDockManagerComponent> & {
        ref?: React.Ref<IgcDockManagerComponent>;
      };
    }
  }
}

defineCustomElements();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
