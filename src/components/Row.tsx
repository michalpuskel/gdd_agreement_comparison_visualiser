import * as React from "react";
import { IColorSetting, IComparison, IData } from "../App";
import Col from "./Col";
import HeadCol from "./HeadCol";

interface IProps extends Pick<IData, "Id" | "File_name" | "Group"> {
  data: IComparison;
  fileNames: string[];
  minValue?: number;
  headColors: IColorSetting;
}

const Row = ({ data, fileNames, Id, Group, minValue, headColors }: IProps) => (
  <tr>
    <HeadCol Id={Id} Group={Group} headColors={headColors} />
    {fileNames.map((fileName) => (
      <Col key={fileName} value={data[fileName]} minValue={minValue} />
    ))}
  </tr>
);

export default Row;
