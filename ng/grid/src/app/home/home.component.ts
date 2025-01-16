import { Component } from '@angular/core';
import { IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IGX_GRID_DIRECTIVES]
})
export class HomeComponent {
  sampleData = [
    { id: 1, name: "John", country: "USA", age: 37 },
    { id: 2, name: "Alice", country: "India", age: 32 },
    { id: 3, name: "Bob", country: "Korea", age: 25 },
    { id: 4, name: "Doe", country: "Japan", age: 20 },
  ];
}
