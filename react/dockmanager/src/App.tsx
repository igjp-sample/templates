import { IgcDockManagerComponent, IgcDockManagerPaneType, IgcSplitPaneOrientation } from "@infragistics/igniteui-dockmanager";
import { useEffect, useRef } from "react";

export const App = () => {
  const dockManagerRef = useRef<IgcDockManagerComponent>(null);

  useEffect(() => {
    const dockManager = dockManagerRef.current;
    if (!dockManager) return;
    dockManager.layout = {
      rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.vertical,
        panes: [
          {
            header: "Content 1",
            type: IgcDockManagerPaneType.contentPane,
            contentId: "content1",
          },
          {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
              {
                header: "Content 2",
                type: IgcDockManagerPaneType.contentPane,
                contentId: "content2",
              },
              {
                header: "Content 3",
                type: IgcDockManagerPaneType.contentPane,
                contentId: "content3",
              },
            ],
          },
        ],
      },
    };
  }, []);

  return (
    <div style={{ maxWidth: 600, height: 480, padding: 24, margin: "auto", display: "flex", flexDirection: "column", gap: 24 }}>
      <igc-dockmanager ref={dockManagerRef}>
        <div slot="content1">Content 1</div>
        <div slot="content2">Content 2</div>
        <div slot="content3">Content 3</div>
      </igc-dockmanager>
    </div>
  );
};
