import React, { Component } from "react";

import Pixel from "./Pixel/Pixel";

import "./Canvas.css";

class Canvas extends Component {
    /*
        Paint block if hover over pixel && mouse down
    */
    onMouseEnter = e => {
        e.preventDefault();
        switch (e.buttons) {
            case 1:
                this.paintPixel(e.target, this.props.primaryColor);
                return;
            case 2:
                this.paintPixel(e.target, this.props.secondaryColor);
                return;
            default:
                return;
        }
    };

    /*
        Paint the target pixel.
        @param {DOMNode, String}
        @return {void}
    */
    paintPixel = (target, color) => {
        target.style.backgroundColor = color;
    };

    render() {
        const { pixels } = this.props;

        /*
            Generating pixel list
        */
        const pcs = pixels.map(row => {
            return row.map(pixel => {
                const { id, drawnColor: backgroundColor } = pixel;

                return (
                    <Pixel
                        key={id}
                        id={id}
                        backgroundColor={backgroundColor}
                        onMouseEnter={this.onMouseEnter}
                        onMouseDown={this.onMouseEnter}
                    />
                );
            });
        });

        /*
            Assemble canvas grid
        */
        const gridStyle = {
            display: "grid",
            gridTemplateColumns: `repeat(${pixels.length}, min-content)`
        };

        return (
            <div className="canvas__container" style={gridStyle}>
                {pcs}
            </div>
        );
    }
}

export default Canvas;
