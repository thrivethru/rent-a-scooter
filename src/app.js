import User from "./user.js";
import Station from "./station.js";
import Scooter from "./scooter.js";
import UserSession from "./session/user-session.js";
import RentalSession from "./session/rental-session.js";

class App {
    constructor() {
        this.users = [];
    }

    verifyAge(age) {
        return age >= 18;
    }

    registerUser(registrationInfo) {
        const { name, license, email, phone, age, password } = registrationInfo;
        if (this.verifyAge(age)) {
            const newUser = new User(name, license, email, phone, age, password);
            newUser.signIn();
            new UserSession(newUser);
            console.log("Thank you for registering");
        } else console.log("You must be 18 years old to register");
    }

    signInUser(credentials) {
        const { email, password } = credentials;
        if (typeof email !== "string") throw new Error("email must be text");
        const signInUser = User.signIn(email, password);
        if (signInUser.user) new UserSession(signInUser.user);
        console.log(signInUser.message);
        return signInUser.message;
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

    confirmRental(stationId, userId) {
        const station = Station.getStationById(stationId);
        const availableScooter = station.getAvailableScooter();
        const user = User.getUserById(userId);
        if (availableScooter && user.getPaymentMethods().length > 0) {
            const scooter = station.unDockScooter(availableScooter.id);
            scooter.setStatus("Rented");
            user.addScooter(scooter);
            // TODO: end available session
            new RentalSession(scooter.id, userId, stationId);
        }
    }

    reportBrokenScooter(scooter) {
        // TODO: check if docked or dockScooter
        // TODO: end current session
        // TODO: start maintenance session
    }

    returnScooter(currentSession, endLocationId) {
        // TODO: check if maintenance session or rental session
        // TODO: end current session
        // TODO: start charging session
        // TODO: if current session is rental session processPayment
        const endStation = Station.getStationById(endLocationId);
        endStation.dockScooter(currentSession.scooterId)
        currentSession.endSession(endLocationId);

        this.processPayment(currentSession);
    }

    processPayment(rentalSession) {
        // TODO: verify session ended and scooter returned
        // get cost of rental time
        const amount = rentalSession.getCost();
        const requiredPayment = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
        // TODO: get payment method for rentalSession.userId
        // TODO: process payment with the user's payment method
        // TODO: handle payment exceptions
        console.log(`Thank you for your payment of ${requiredPayment}.`)
    }
}

export default App;