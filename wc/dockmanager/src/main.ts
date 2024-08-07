import "./style.css";
import { defineCustomElements } from "@infragistics/igniteui-dockmanager/loader";
import { IgcDockManagerPaneType, IgcSplitPaneOrientation, IgcDockManagerComponent } from "@infragistics/igniteui-dockmanager";

defineCustomElements();

const dockManager = document.getElementById("dockManager") as IgcDockManagerComponent;
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
