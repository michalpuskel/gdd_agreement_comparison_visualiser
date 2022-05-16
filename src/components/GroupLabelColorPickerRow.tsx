import * as React from "react";
import { IColorSetting } from "../App";

interface IProps {
  groupLabel: string;
  data: IColorSetting["groupLabel"];
  onChange: React.Dispatch<React.SetStateAction<IColorSetting>>;
}

const GroupLabelColorPickerRow = ({ groupLabel, data, onChange }: IProps) => {
  const [background, setBackground] = React.useState(data.background);
  const [text, setText] = React.useState(data.text);

  const handleRemove = () =>
    onChange((prevColors) => {
      const { [groupLabel]: _removed, ...rest } = prevColors;
      return { ...rest };
    });

  return (
    <div className="GroupLabelColorPickerRow">
      <span className="GroupLabelColorPickerRow__Name">{groupLabel}</span>
      <div className="GroupLabelColorPickerRow__Controls">
        <label>
          background:
          <input
            type="color"
            value={background}
            onChange={(e) => {
              setBackground(e.target.value);
              onChange((prevColors) => ({
                ...prevColors,
                [groupLabel]: { background, text },
              }));
            }}
          />
        </label>
        <label>
          text:
          <input
            type="color"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              onChange((prevColors) => ({
                ...prevColors,
                [groupLabel]: { background, text },
              }));
            }}
          />
        </label>
        <button title="remove group" onClick={handleRemove}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default GroupLabelColorPickerRow;
