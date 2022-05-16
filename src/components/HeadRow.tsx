import * as React from "react";
import { IAllData } from "../App";
import HeadCol from "./HeadCol";

interface IProps {
  data: IAllData;
  fileNames: string[];
}

const HeadRow = ({ data, fileNames }: IProps) => (
  <tr>
    <th className="HeadCol HeadCol--black">id</th>
    {fileNames.map((fileName) => (
      <HeadCol
        key={fileName}
        Id={data[fileName].Id}
        Group={data[fileName].Group}
      />
    ))}
  </tr>
);

export default HeadRow;
