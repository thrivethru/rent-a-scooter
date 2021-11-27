import User from "./user.js";
import Station from "./station.js";
import Scooter from "./scooter.js";

class App {
    constructor() {
        this.users = [];
    }

    verifyAge(age) {
        return age >= 18;
    }

    registerUser(registrationInfo) {
        const { name, license, email, phone, age } = registrationInfo;
        if (this.verifyAge(age)) {
            const newUser = new User(name, license, email, phone, age);
        }
    }

    signinUser(userCredentials) {
        // TODO: auth flow
    }

    listLocations() {
        return Station.listLocations();
    }

    listAvailbleScooters() {
        return Scooter.availableScooters();
    }

    listLocationsWithAvailability() {
        // TODO
        return [];
    }

    confirmRental() {
        // TODO: verify valid payment method
        // TODO: end available session
        // TODO: start rental session
    }

    checkoutScooter() {
        // TODO: end available session
        // TODO: start rental session
        // TODO: undockScooter
    }

    reportBrokenScooter(scooter) {
        // TODO: check if docked or dockScooter
        // TODO: end current session
        // TODO: start maintenance session
    }

    returnScooter(currentSession) {
        // TODO: dockScooter
        // TODO: check if maintenance session or rental session
        // TODO: end current session
        // TODO: start charging session
        // TODO: if current session is rental session processPayment
    }

    processPayment(rentalSession) {
        // TODO: verify session ended and scooter returned
        // get cost of rental time
    }
}

export default App;