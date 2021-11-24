const Maintenance = require('../src/maintenance');

describe("Maintenance class", () => {
    test("Creates a maintenance instance", () => {
        const name = "John";
        const testMaintenance = new Maintenance(name);
        expect(testMaintenance).toBeDefined();
        expect(testMaintenance instanceof Maintenance).toBeTruthy();
    });
});