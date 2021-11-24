const User = require("./user");

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

    signinUser(user) {

    }

    listLocations() {

    }

    listAvailbleScooters() {

    }

    listLocationsWithAvailability() {

    }

    confirmRental() {

    }

    checkoutScooter() {

    }

    reportBrokenScooter(scooter) {

    }

    returnScooter() {

    }

    processPayment() {

    }
}

module.exports = App;