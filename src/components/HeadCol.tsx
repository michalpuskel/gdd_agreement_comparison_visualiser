import * as React from "react";
import { IColorSetting, IData } from "../App";

interface IProps extends Pick<IData, "Id" | "Group"> {
  headColors: IColorSetting;
}

const HeadCol = ({ Id, Group, headColors }: IProps) => {
  let groupBackgroundColor = "white";
  let groupTextColor = "black";
  if (Group !== "null") {
    groupBackgroundColor = headColors[Group]?.background ?? "white";
    groupTextColor = headColors[Group]?.text ?? "black";
  }

  return (
    <th
      className={`HeadCol`}
      style={{ backgroundColor: groupBackgroundColor, color: groupTextColor }}
    >
      {Id}
    </th>
  );
};

export default HeadCol;
