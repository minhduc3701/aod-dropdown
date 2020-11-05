"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Toggle_1 = require("aod-dependencies/Toggle");
var icons_1 = require("aod-dependencies/@uifabric/icons");
var AppStyle_1 = require("./AppStyle");
var CustomDropdown_1 = require("aod-dependencies/Dropdown/CustomDropdown");
icons_1.initializeIcons();
var options = [
    {
        key: "option1",
        text: "option1"
    },
    { key: "option2", text: "option2", disabled: true },
    { key: "option3", text: "option3" },
];
function App() {
    var _a = react_1["default"].useState(""), darkMode = _a[0], setDarkMode = _a[1];
    var _b = react_1["default"].useState(false), disabled = _b[0], setDisabled = _b[1];
    var _c = react_1["default"].useState(false), multiple = _c[0], setMultiple = _c[1];
    var onChangeMode = function () {
        if (darkMode === "dark") {
            setDarkMode("light");
        }
        if (darkMode !== "dark") {
            setDarkMode("dark");
        }
    };
    var onChangeDisable = function () {
        setDisabled(!disabled);
    };
    var onChangeMultipleSelect = function () {
        setMultiple(!multiple);
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(AppStyle_1.Wrapper, { theme: darkMode },
            react_1["default"].createElement("div", { className: "toggle-wrapper" },
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Dark mode", onChange: onChangeMode }),
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Disable", onChange: onChangeDisable }),
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Multiple Select", onChange: onChangeMultipleSelect })),
            react_1["default"].createElement("div", { style: { width: "300px" } },
                react_1["default"].createElement(CustomDropdown_1["default"], { placeholder: "Select an option", label: "Custom dropdown example", options: options, disabled: disabled, 
                    // <DropdownDarkMode>
                    darkMode: darkMode, 
                    // </DropdownDarkMode>
                    //<DropdownMultipleSelect>
                    multiSelect: multiple })))));
}
exports["default"] = App;
