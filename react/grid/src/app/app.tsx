import { DisplayDensity, IgrColumn, IgrGrid } from "@infragistics/igniteui-react-grids";

const sampleData = [
  { id: 1, name: "John", country: "USA", age: 37 },
  { id: 2, name: "Alice", country: "India", age: 32 },
  { id: 3, name: "Bob", country: "Korea", age: 25 },
  { id: 4, name: "Doe", country: "Japan", age: 20 },
];

export const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "24px auto" }}>
      <IgrGrid data={sampleData} primaryKey="id" width="100%" height="300px" displayDensity={DisplayDensity.Cosy}>
        <IgrColumn field="name" header="Name" />
        <IgrColumn field="country" header="Country" />
        <IgrColumn field="age" header="Age" />
      </IgrGrid>
    </div>
  );
};
