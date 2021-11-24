const Maintenance = require('../src/maintenance');

describe("Maintenance class", () => {
    test("Creates a maintenance instance", () => {
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        const testMaintenance = new Maintenance(name, license, email, phone);
        expect(testMaintenance).toBeDefined();
        expect(testMaintenance instanceof Maintenance).toBeTruthy();
    });
});