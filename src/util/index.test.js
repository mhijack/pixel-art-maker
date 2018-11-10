import util from "./index";

describe("test 'generatePixelConfigs'", () => {
    test("each config object has four fields", () => {
        expect(util.generatePixelConfigs(1, 1)).toEqual([
            [{ id: 0, col: 0, row: 0, drawnColor: null }]
        ]);
    });

    test("50 rows", () => {
        expect(util.generatePixelConfigs().length).toBe(50);
    });

    test("50 columns", () => {
        expect(util.generatePixelConfigs()[0].length).toBe(50);
    });
});
