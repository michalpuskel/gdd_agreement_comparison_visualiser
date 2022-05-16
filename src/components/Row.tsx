import * as React from "react";
import { IComparison, IData } from "../App";
import Col from "./Col";
import HeadCol from "./HeadCol";

interface IProps extends Pick<IData, "Id" | "File_name" | "Group"> {
  data: IComparison;
  fileNames: string[];
  minValue?: number;
}

const Row = ({ data, fileNames, Id, Group, minValue }: IProps) => (
  <tr>
    <HeadCol Id={Id} Group={Group} />
    {fileNames.map((fileName) => (
      <Col key={fileName} value={data[fileName]} minValue={minValue} />
    ))}
  </tr>
);

export default Row;
