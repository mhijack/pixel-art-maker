import React from "react";

import "./Pixel.css";

const Pixel = ({ id, backgroundColor, onMouseEnter }) => {
    // only set backgroundColor if user painted; otherwise show alternating white and grey pattern
    const style = {
        backgroundColor:
            backgroundColor === null
                ? id % 2 === 0
                    ? "white"
                    : "#DBDCE0"
                : backgroundColor
    };

    return (
        <div
            className="pixel"
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseDown={onMouseEnter}
        />
    );
};

export default Pixel;
