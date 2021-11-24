const Maintenance = require('../src/maintenance');

describe("Maintenance class", () => {
    const testMaintenance = new Maintenance();
    test("Creates a maintenance instance", () => {
        expect(testMaintenance).toBeDefined();
        expect(testMaintenance instanceof Maintenance).toBeTruthy();
    });
});