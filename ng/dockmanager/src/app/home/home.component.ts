import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgcDockManagerLayout, IgcDockManagerPaneType, IgcSplitPaneOrientation } from '@infragistics/igniteui-dockmanager';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  public layout: IgcDockManagerLayout = {
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
    floatingPanes: []
  };
}
