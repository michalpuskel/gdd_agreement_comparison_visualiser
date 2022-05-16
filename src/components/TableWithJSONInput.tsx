import * as React from "react";
import Table from "./Table";

interface IProps {
  dataValue: string;
}

const TableWithJSONInput = ({ dataValue }: IProps) => {
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

  return (
    <div className="TableContainer">
      <Table data={dataJSON} variant="arithmetic" />
      <Table data={dataJSON} variant="geometric" />
      <Table data={dataJSON} variant="arithmetic" stretchValues />
      <Table data={dataJSON} variant="geometric" stretchValues />
    </div>
  );
};

export default TableWithJSONInput;
