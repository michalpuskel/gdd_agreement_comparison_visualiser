import * as React from "react";
import TableWithJSONInput from "./TableWithJSONInput";

const JSONInput = () => {
  const [value, setValue] = React.useState("");

  return (
    <div className="JSONInput">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="paste GDD agreement comparison JSON here"
        rows={10}
      ></textarea>

      <TableWithJSONInput dataValue={value} />
    </div>
  );
};

export default JSONInput;
