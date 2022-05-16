import * as React from "react";
import { getColor } from "../helpers";

interface IProps {
  value: string;
  minValue?: number;
}

const Col = ({ value, minValue }: IProps) => (
  <td style={{ backgroundColor: getColor(value, minValue) }} />
);

export default Col;
