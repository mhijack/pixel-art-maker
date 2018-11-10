import React, { Component, Suspense, lazy } from "react";
import util from "../util/index";

import "./App.css";

import ControlPanel from "../components/ControlPanel/ControlPanel";
const Canvas = lazy(() => import("../components/Canvas/Canvas"));

class App extends Component {
    state = {
        pixels: [],
        primaryColor: "#000",
        secondaryColor: "#fff"
    };

    handlePickColor = e => {
        this.setState({ primaryColor: e.target.value });
    };

    /*
        Generate a list containing pixel .
        @param {void}
        @
        Each pixel in the format: 
    */
    componentDidMount = () => {
        this.setState({ pixels: util.generatePixelConfigs() });
    };

    render() {
        return (
            <div className="App">
                <h1>Pixel Art Maker</h1>

                <ControlPanel handlePickColor={this.handlePickColor} />

                <Suspense fallback={<div>Loading</div>}>
                    <Canvas {...this.state} />
                </Suspense>
            </div>
        );
    }
}

export default App;
