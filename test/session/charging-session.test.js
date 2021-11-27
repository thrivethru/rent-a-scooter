import ChargingSession from '../../src/session/charging-session.js';

describe("ChargingSession class", () => {
    test("Creates a charging session instance", () => {
        const testChargingSession = new ChargingSession();
        expect(testChargingSession).toBeDefined();
        expect(testChargingSession instanceof ChargingSession).toBeTruthy();
    });
});