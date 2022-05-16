import * as React from "react";
import { IColorSetting } from "../App";
import GroupLabelColorPicker from "./GroupLabelColorPicker";
import Table from "./Table";

interface IProps {
  dataValue: string;
}

const TableWithJSONInput = ({ dataValue }: IProps) => {
  const [colors, setColors] = React.useState<IColorSetting>({});

  let dataJSON = undefined;
  try {
    dataJSON = JSON.parse(dataValue);
  } catch (error) {
    return (
      <div className="Error">
        <span>There was some error with JSON input:</span>
        {error instanceof Error && <span>{error.message}</span>}
      </div>
    );
  }

  const tableProps = { data: dataJSON, headColors: colors };

  return (
    <div className="TableContainer">
      <GroupLabelColorPicker colors={colors} onChange={setColors} />

      <Table {...tableProps} variant="arithmetic" />
      <Table {...tableProps} variant="geometric" />
      <Table {...tableProps} variant="arithmetic" stretchValues />
      <Table {...tableProps} variant="geometric" stretchValues />
    </div>
  );
};

export default TableWithJSONInput;
