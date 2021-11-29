import App from '../src/app.js';
import User from '../src/user.js';
import Station from '../src/station.js';
import Scooter from '../src/scooter.js';
import RentalSession from '../src/session/rental-session.js';

describe("App class", () => {
    const testApp = new App();

    const location = "Main";
    const capacity = 20;
    const testStation = new Station(location, capacity);

    const testScooter = new Scooter();

    const name = "John";
    const license = "1234";
    const email = "mark@me.com";
    const phone = "555-555-5555";
    const age = 20;
    const password = "secret";
    const testUser = new User(name, license, email, phone, age, password);

    const scooterId = testScooter.id;
    const userId = testUser.id;
    const startLocationId = testStation.id;

    const testRentalSession = new RentalSession(scooterId, userId, startLocationId);

    test("Creates a app instance", () => {
        expect(testApp).toBeDefined();
        expect(testApp instanceof App).toBeTruthy();
    });

    test("can verify age is 18 or older", () => {
        const ageUnder = 15;
        const ageAt = 18;
        const ageOver = 20;
        expect(testApp.verifyAge(ageUnder)).toBeFalsy();
        expect(testApp.verifyAge(ageAt)).toBeTruthy();
        expect(testApp.verifyAge(ageOver)).toBeTruthy();
    });

    test("can sign in users", () => {
        const credentials = { email, password };
        const result = testApp.signInUser(credentials);
        expect(result).toBe("Success");
    });

    test("can list locations", () => {
        const locations = testApp.listLocations();
        // TODO: add test
    });

    test("can list locations", () => {
        const availableScooters = testApp.listAvailbleScooters();
        // TODO: add test
    });

    test("can list locations with availability", () => {
        const locations = testApp.listLocationsWithAvailability();
        // TODO: add test
    });

    test("won't register a new user under 18 years old", () => {
        const ageUnder = 15;
        const registrationInfoUnder= { name, license, email, phone, ageUnder, password };
        testApp.registerUser(registrationInfoUnder);
    });

    test("can register a new user", () => {
        const emailB = "you@you.com";
        const registrationInfoNew = { name, license, email: emailB, phone, age, password };
        testApp.registerUser(registrationInfoNew);
        // TODO: add test
    });

    test("can confirm rental", () => {
        testStation.dockScooter(scooterId);
        testApp.confirmRental(startLocationId, userId);
        // TODO: add test
    });

    test("can report broken scooter", () => {
        const scooterId = 1;
        testApp.reportBrokenScooter(scooterId);
        // TODO: add test
    });

    test("can return scooter", () => {
        testApp.returnScooter(testRentalSession, testStation.id);
        // TODO: add test
    });

    test("can process payment", () => {
        testApp.processPayment(testRentalSession);
        // TODO: add test
    });
});