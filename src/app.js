import User from "./user.js";
import Station from "./station.js";

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
        return [];
    }

    listLocationsWithAvailability() {
        return [];
    }

    confirmRental() {

    }

    checkoutScooter() {

    }

    reportBrokenScooter(scooterId) {

    }

    returnScooter() {

    }

    processPayment() {

    }
}

export default App;