import "./style.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "@infragistics/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css";
import "@infragistics/igniteui-webcomponents-grids/grids/combined.js";

import { IgcGridComponent } from "@infragistics/igniteui-webcomponents-grids/grids";

const sampleData = [
  { id: 1, name: "John", country: "USA", age: 37 },
  { id: 2, name: "Alice", country: "India", age: 32 },
  { id: 3, name: "Bob", country: "Korea", age: 25 },
  { id: 4, name: "Doe", country: "Japan", age: 20 },
];

const grid = document.querySelector("#grid1") as IgcGridComponent;
grid.data = sampleData;
