import "./style.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";

import { ModuleManager } from "@infragistics/igniteui-webcomponents-core";
import { IgcExcelModule } from "@infragistics/igniteui-webcomponents-excel";
import { IgcSpreadsheetModule } from "@infragistics/igniteui-webcomponents-spreadsheet";

ModuleManager.register(IgcExcelModule, IgcSpreadsheetModule);
