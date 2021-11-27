import MaintenanceSession from '../../src/session/maintenance-session.js';

describe("MaintenanceSession class", () => {
    test("Creates a maintenance session instance", () => {
        const testMaintenanceSession = new MaintenanceSession();
        expect(testMaintenanceSession).toBeDefined();
        expect(testMaintenanceSession instanceof MaintenanceSession).toBeTruthy();
    });
});