const User = require("./user");
const Station = require("./station");

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

module.exports = App;