export default (function() {
    /*
        Generate a list of objects containing pixel config.
        @param {Number?, NUmber?, String?} height & width > 50
        @returns {Object[][]} A matrix of pixel config objects.
    */
    function generatePixelConfigs(
        height = 50,
        width = 50,
        drawnColor = undefined
    ) {
        const configs = [];

        for (let col = 0; col < height; col++) {
            const line = [];

            for (let row = 0; row < width; row++) {
                line.push({
                    ...generatePixel(col + row, drawnColor),
                    col,
                    row
                });
            }
            configs.push(line);
        }

        return configs;
    }

    function generatePixel(id, drawnColor = null) {
        return {
            id,
            drawnColor
        };
    }

    return {
        generatePixelConfigs
    };
})();
