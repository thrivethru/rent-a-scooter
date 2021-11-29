import ScooterSession from '../../src/session/scooter-session';
import Session from '../../src/session/session.js';

describe("ScooterSession class", () => {
    const type = "Test";
    const scooterId = 1;
    const ownerId = 1;
    const startLocationId = 1;
    const endLocationId = 2;
    const testScooterSession = new ScooterSession(type, scooterId, ownerId, startLocationId);

    test("Creates a scooter session instance", () => {
        expect(testScooterSession).toBeDefined();
        expect(testScooterSession instanceof ScooterSession).toBeTruthy();
    });

    test("has an id of type number", () => {
        expect(typeof testScooterSession.id).toBe("number");
        expect(testScooterSession.id).toBe(0);
    });

    test("has a scooterId of type number", () => {
        expect(typeof testScooterSession.scooterId).toBe("number");
        expect(testScooterSession.scooterId).toBe(scooterId);
    });

    test("has an ownerId of type number", () => {
        expect(typeof testScooterSession.ownerId).toBe("number");
        expect(testScooterSession.ownerId).toBe(ownerId);
    });

    test("has a start time that is an instanse of Date", () => {
        expect(testScooterSession.startTime instanceof Date).toBeTruthy();
    });

    test("has a startLocationId of type number", () => {
        expect(typeof testScooterSession.startLocationId).toBe("number");
        expect(testScooterSession.startLocationId).toBe(startLocationId);
    });

    test("has an end time that begins as null", () => {
        expect(testScooterSession.endTime).toBeNull();
    });

    test("has an endLocationId that begins as null", () => {
        expect(testScooterSession.endLocationId).toBeNull();
    });

    test("has isActive of type number set to True", () => {
        expect(typeof testScooterSession.isActive).toBe("boolean");
        expect(testScooterSession.isActive).toBe(true);
    });

    test("can get active sessions", () => {
        const activeSessions = ScooterSession.getActiveSessions();
        expect(activeSessions.length).toBe(1);
        expect(activeSessions[0]).toBe(testScooterSession);
    });

    test("can get a session by id", () => {
        const session = ScooterSession.getSessionById(testScooterSession.id);
        expect(session instanceof ScooterSession);
        expect(session).toBe(testScooterSession);
    });

    test("can get sessions by scooterId", () => {
        const sessions = ScooterSession.getSessionsByScooterId(scooterId);
        expect(sessions instanceof Array).toBeTruthy();
        expect(sessions.length).toBe(1);
        expect(sessions[0]).toBe(testScooterSession);
    });

    test("can get sessions by ownerId", () => {
        const sessions = ScooterSession.getSessionsByOwnerId(ownerId);
        expect(sessions instanceof Array).toBeTruthy();
        expect(sessions.length).toBe(1);
        expect(sessions[0]).toBe(testScooterSession);
    });

    test("can get current session duration of an active session", () => {
        const currentDuration = testScooterSession.getSessionDuration();
        expect(typeof currentDuration).toBe("number");
    });

    test("can end session", () => {
        testScooterSession.endSession(endLocationId);
        expect(testScooterSession.endTime instanceof Date).toBeTruthy();
        expect(testScooterSession.endLocationId).toBe(endLocationId);
        expect(testScooterSession.isActive).toBe(false);
    });

    test("can get session duration of an inactive session", () => {
        const currentDuration = testScooterSession.getSessionDuration();
        expect(typeof currentDuration).toBe("number");
    });
});