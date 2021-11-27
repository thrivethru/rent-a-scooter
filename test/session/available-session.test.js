import AvailableSession from '../../src/session/available-session.js';

describe("AvailableSession class", () => {
    test("Creates a available session instance", () => {
        const testAvailableSession = new AvailableSession();
        expect(testAvailableSession).toBeDefined();
        expect(testAvailableSession instanceof AvailableSession).toBeTruthy();
    });
});