import React from "react";

const ControlPanel = ({ handlePickColor }) => {
    return (
        <div className="control">
            <h1>Pixel Art Maker</h1>

            <div>Row</div>

            <div>Column</div>

            <input type="color" onChange={handlePickColor} />
        </div>
    );
};

export default ControlPanel;
