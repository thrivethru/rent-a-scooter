import RentalSession from '../../src/session/rental-session.js';

describe("RentalSession class", () => {
    const scooterId = 1;
    const userId = 1;
    const startLocationId = 1;
    const endLocationId = 2;
    const testRentalSession = new RentalSession(scooterId, userId, startLocationId);

    test("Creates a rental session instance", () => {
        expect(testRentalSession).toBeDefined();
        expect(testRentalSession instanceof RentalSession).toBeTruthy();
    });

    test("calculates session cost", () => {
        const cost = testRentalSession.getCost();
        expect(cost >= 5).toBeTruthy();
    });

    test("calculates session cost of an inactive", () => {
        testRentalSession.endSession(endLocationId);
        const cost = testRentalSession.getCost();
        expect(cost >= 5).toBeTruthy();
    });
});