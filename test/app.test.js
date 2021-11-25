import App from '../src/app.js';

describe("App class", () => {
    const testApp = new App();
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
        const credentials = "secret";
        testApp.signinUser(credentials);
        // TODO: add test
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
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        const age = 15;
        const registrationInfo = { name, license, email, phone, age }
        testApp.registerUser(registrationInfo);
    });

    test("can register a new user", () => {
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        const age = 20;
        const registrationInfo = { name, license, email, phone, age }
        testApp.registerUser(registrationInfo);
    });

    test("can confirm rental", () => {
        testApp.confirmRental();
        // TODO: add test
    });
    
    test("can checkout scooter", () => {
        testApp.checkoutScooter();
        // TODO: add test
    });

    test("can report broken scooter", () => {
        const scooterId = 1;
        testApp.reportBrokenScooter(scooterId);
        // TODO: add test
    });

    test("can return scooter", () => {
        testApp.returnScooter();
        // TODO: add test
    });

    test("can process payment", () => {
        testApp.processPayment();
        // TODO: add test
    });
});