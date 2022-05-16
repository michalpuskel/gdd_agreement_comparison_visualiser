import * as React from "react";
import { IColorSetting } from "../App";
import GroupLabelColorPickerRow from "./GroupLabelColorPickerRow";

interface IProps {
  colors: IColorSetting;
  onChange: React.Dispatch<React.SetStateAction<IColorSetting>>;
}

const GroupLabelColorPicker = ({ colors, onChange }: IProps) => {
  const groupLabels = Object.keys(colors);

  const [newLabel, setNewlabel] = React.useState("");

  const handleAdd = () => {
    onChange((prevColors) => ({
      ...prevColors,
      [newLabel]: { background: "#ffffff", text: "#000000" },
    }));
    setNewlabel("");
  };

  return (
    <div className="GroupLabelColorPicker">
      <h3>group labels colors [optional]</h3>

      {groupLabels.map((groupLabel) => (
        <GroupLabelColorPickerRow
          key={groupLabel}
          groupLabel={groupLabel}
          data={colors[groupLabel]}
          onChange={onChange}
        />
      ))}

      <div className="GroupLabelColorPicker__GroupNameInput">
        <input
          value={newLabel}
          placeholder="enter new group label name"
          onChange={(e) => setNewlabel(e.target.value)}
        />

        <button onClick={handleAdd} disabled={!newLabel} title="add group">
          ➕
        </button>
      </div>
    </div>
  );
};

export default GroupLabelColorPicker;
