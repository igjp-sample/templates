import { IgrSpreadsheet } from "@infragistics/igniteui-react-spreadsheet";

export const App = () => {
  return (
    <div style={{ maxWidth: 600, padding: 24, margin: "auto", display: "flex", flexDirection: "column", gap: 24 }}>
      <IgrSpreadsheet width="600px" height="400px" />
    </div>
  );
};
