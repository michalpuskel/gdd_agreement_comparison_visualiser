import * as React from "react";
import { getColor } from "../helpers";

interface IProps {
  minValue?: number;
}

const TableLegend = ({ minValue }: IProps) => {
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

export default TableLegend;
