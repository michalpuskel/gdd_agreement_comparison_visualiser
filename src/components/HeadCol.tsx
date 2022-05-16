import * as React from "react";
import { IData } from "../App";

interface IProps extends Pick<IData, "Id" | "Group"> {}

const HeadCol = ({ Id, Group }: IProps) => {
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
    <th className={`HeadCol`} style={{ backgroundColor: groupColor }}>
      {Id}
    </th>
  );
};

export default HeadCol;
