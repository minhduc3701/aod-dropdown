import React from "react";
import "./App.css";
import { Toggle } from "aod-dependencies/Toggle";
import { initializeIcons } from "aod-dependencies/@uifabric/icons";
import { Wrapper } from "./AppStyle";
import { IDropdownOption } from "aod-dependencies/Dropdown";
import CustomDropdown from "aod-dependencies/Dropdown/CustomDropdown";

initializeIcons();

const options: IDropdownOption[] = [
  {
    key: "option1",
    text: "option1",
  },
  { key: "option2", text: "option2", disabled: true },
  { key: "option3", text: "option3" },
];

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [multiple, setMultiple] = React.useState<boolean>(false);
  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };
  const onChangeDisable = () => {
    setDisabled(!disabled);
  };
  const onChangeMultipleSelect = () => {
    setMultiple(!multiple);
  };
  return (
    <div className="App">
      <Wrapper theme={darkMode}>
        <div className="toggle-wrapper">
          <Toggle label="Dark mode" onChange={onChangeMode} />
          <Toggle label="Disable" onChange={onChangeDisable} />
          <Toggle label="Multiple Select" onChange={onChangeMultipleSelect} />
        </div>
        <div style={{ width: "300px" }}>
          <CustomDropdown
            placeholder="Select an option"
            label="Custom dropdown example"
            options={options}
            disabled={disabled}
            // <DropdownDarkMode>
            darkMode={darkMode}
            // </DropdownDarkMode>
            //<DropdownMultipleSelect>
            multiSelect={multiple}
            //</DropdownMultipleSelect>
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
