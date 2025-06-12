import { IgrCategoryChart } from "@infragistics/igniteui-react-charts";

const sampleData = [
  { year: "2009", europe: 496, china: 300, america: 120 },
  { year: "2010", europe: 412, china: 350, america: 140 },
  { year: "2011", europe: 404, china: 400, america: 200 },
  { year: "2012", europe: 390, china: 450, america: 220 },
  { year: "2013", europe: 367, china: 500, america: 250 },
  { year: "2014", europe: 358, china: 550, america: 300 },
  { year: "2015", europe: 350, china: 600, america: 350 },
  { year: "2016", europe: 342, china: 650, america: 400 },
  { year: "2017", europe: 325, china: 700, america: 450 },
  { year: "2018", europe: 332, china: 750, america: 500 },
  { year: "2019", europe: 348, china: 800, america: 550 },
  { year: "2020", europe: 354, china: 850, america: 600 },
];

export const App = () => {
  return (
    <div style={{ maxWidth: 600, padding: 24, margin: "auto", display: "flex", flexDirection: "column", gap: 24 }}>
      <IgrCategoryChart
        width="100%"
        height="400px"
        chartType="Line"
        dataSource={sampleData}
        includedProperties={["year", "europe", "china", "america"]}
        yAxisTitle="TWh"
        computedPlotAreaMarginMode="Series"
      ></IgrCategoryChart>
    </div>
  );
};
