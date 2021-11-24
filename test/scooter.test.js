const Scooter = require('../src/scooter');

describe("Scooter class", () => {
    const testScooter = new Scooter();
    test("Creates a scooter instance", () => {
        expect(testScooter).toBeDefined();
        expect(testScooter instanceof Scooter).toBeTruthy();
    });
});