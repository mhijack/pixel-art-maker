import React from "react";
import { SketchPicker } from "react-color";

const ControlPanel = ({ primaryColor, handlePickColor }) => {
    return (
        <div className="control">
            <div>Change Row</div>

            <div>Change Column</div>

            <SketchPicker
                color={primaryColor}
                onChangeComplete={handlePickColor}
            />
        </div>
    );
};

export default ControlPanel;
