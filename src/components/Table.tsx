import * as React from "react";
import { IAllData, IColorSetting } from "../App";
import HeadRow from "./HeadRow";
import Row from "./Row";
import TableLegend from "./TableLegend";

interface IProps {
  data: IAllData;
  variant: "arithmetic" | "geometric";
  stretchValues?: boolean;
  headColors: IColorSetting;
}

const Table = ({
  data,
  variant: iVariant,
  stretchValues,
  headColors,
}: IProps) => {
  const fileNames = Object.values(data)
    .sort((a, b) => (a.Id < b.Id ? -1 : a.Id > b.Id ? 1 : 0))
    .map((d) => d.File_name);

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
          <HeadRow data={data} fileNames={fileNames} headColors={headColors} />
        </thead>
        <tbody>
          {fileNames.map((fileName) => (
            <Row
              key={fileName}
              {...data[fileName]}
              data={data[fileName][variant]}
              fileNames={fileNames}
              minValue={minValue}
              headColors={headColors}
            />
          ))}
        </tbody>
      </table>

      <TableLegend minValue={minValue} />
    </div>
  );
};

export default Table;
