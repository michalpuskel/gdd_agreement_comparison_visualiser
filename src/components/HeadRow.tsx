import * as React from "react";
import { IAllData, IColorSetting } from "../App";
import HeadCol from "./HeadCol";

interface IProps {
  data: IAllData;
  fileNames: string[];
  headColors: IColorSetting;
}

const HeadRow = ({ data, fileNames, headColors }: IProps) => (
  <tr>
    <th className="HeadCol">id</th>
    {fileNames.map((fileName) => (
      <HeadCol
        key={fileName}
        Id={data[fileName].Id}
        Group={data[fileName].Group}
        headColors={headColors}
      />
    ))}
  </tr>
);

export default HeadRow;
