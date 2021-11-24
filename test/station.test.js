const Station = require('../src/station');

describe("Station class", () => {
    const testStation = new Station();
    test("Creates a station instance", () => {
        expect(testStation).toBeDefined();
        expect(testStation instanceof Station).toBeTruthy();
    });
});