import React from "react";
import data from "./ER_BA_GEO.json";
import "./styles.scss";

interface IComparison {
  [fileName: string]: string;
}
interface IData {
  Id: number;
  File_name: string;
  Group: "ER" | "BA" | "GEO";
  Agreement_arithmetic: IComparison;
  Agreement_geometric: IComparison;
}
interface IAllData {
  [fileName: string]: IData;
}

const getColor = (value: string | number, minValue?: number) => {
  let RGvalue = 0;
  if (minValue !== undefined) {
    const r = (255 - 0) / (1 - minValue);
    RGvalue = Math.round(0 + r * (Number(value) - minValue));
  } else {
    RGvalue = Math.round(Number(value) * 255);
  }

  return `rgb(${255 - RGvalue}, ${RGvalue}, 0)`;
};

interface IColProps {
  value: string;
  minValue?: number;
}
const Col = ({ value, minValue }: IColProps) => (
  <td style={{ backgroundColor: getColor(value, minValue) }} />
);

interface IHeadColProps extends Pick<IData, "Id" | "Group"> {}
const HeadCol = ({ Id, Group }: IHeadColProps) => {
  let groupColor = "white";
  switch (Group) {
    case "ER":
      groupColor = "#ff3399";
      break;
    case "BA":
      groupColor = "#0066ff";
      break;
    case "GEO":
      groupColor = "#ffcc00";
      break;
  }

  return (
    <th
      className={`HeadCol HeadCol--${Group}`}
      style={{ backgroundColor: groupColor }}
    >
      {Id}
    </th>
  );
};

interface IRowProps extends Pick<IData, "Id" | "File_name" | "Group"> {
  data: IComparison;
  fileNames: string[];
  minValue?: number;
}
const Row = ({ data, fileNames, Id, Group, minValue }: IRowProps) => (
  <tr>
    <HeadCol Id={Id} Group={Group} />
    {fileNames.map((fileName) => (
      <Col key={fileName} value={data[fileName]} minValue={minValue} />
    ))}
  </tr>
);

interface IHeadRowProps {
  data: IAllData;
  fileNames: string[];
}
const HeadRow = ({ data, fileNames }: IHeadRowProps) => (
  <tr>
    <th className="HeadCol HeadCol--empty" />
    {fileNames.map((fileName) => (
      <HeadCol
        key={fileName}
        Id={data[fileName].Id}
        Group={data[fileName].Group}
      />
    ))}
  </tr>
);

interface ITableLegendProps {
  minValue?: number;
}
const TableLegend = ({ minValue }: ITableLegendProps) => {
  const values = Array.from(Array(101).keys()).map((n) => n / 100);
  return (
    <div className="TableLegend__Container">
      <div className="TableLegend">
        {values.map((value) => (
          <div
            key={value}
            className="TableLegend__Item"
            style={{ backgroundColor: getColor(value) }}
          ></div>
        ))}
      </div>
      <div className="TableLegend__Caption">
        <span>{minValue ?? 0}</span>
        <span>comparison value</span>
        <span>1</span>
      </div>
    </div>
  );
};

interface ITableProps {
  data: IAllData;
  variant: "arithmetic" | "geometric";
  stretchValues?: boolean;
}
const Table = ({ data, variant: iVariant, stretchValues }: ITableProps) => {
  const fileNames = Object.keys(data);

  const variant =
    iVariant === "arithmetic" ? "Agreement_arithmetic" : "Agreement_geometric";

  let minValue: number | undefined = undefined;
  if (stretchValues) {
    fileNames.forEach((fileName) => {
      fileNames.forEach((colFileName) => {
        const value = Number(data[fileName][variant][colFileName]);
        if (minValue === undefined || value < minValue) {
          minValue = value;
        }
      });
    });
  }

  return (
    <div className="Table">
      <table>
        <caption>
          <h2>
            GDD agreement <strong>{iVariant}</strong> comparison
          </h2>
        </caption>
        <thead>
          <HeadRow data={data} fileNames={fileNames} />
        </thead>
        <tbody>
          {fileNames.map((fileName) => (
            <Row
              key={fileName}
              {...data[fileName]}
              data={data[fileName][variant]}
              fileNames={fileNames}
              minValue={minValue}
            />
          ))}
        </tbody>
      </table>

      <TableLegend minValue={minValue} />
    </div>
  );
};

const App = () => (
  <div className="Container">
    <Table data={data} variant="arithmetic" />
    <Table data={data} variant="geometric" />
    <Table data={data} variant="arithmetic" stretchValues />
    <Table data={data} variant="geometric" stretchValues />
  </div>
);

export default App;
