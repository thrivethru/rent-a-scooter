import Person from './person.js';

class User extends Person {
    static users = [];

    constructor(name, license, email, phone, age, password) {
        if (age < 18) throw new Error("user must be 18 or older");
        super(name, license, email, phone);
        this.age = age;
        this.password = password;
        this.paymentMethods = [];
        this.currentScooters = [];
        this.isSignedIn = false;
        // this.rentalHistory = [];
        // this.paymentHistory = [];
        this.constructor.users = [...this.constructor.users, this];
    }

    static getUserByEmail(email) {
        if (typeof email !== "string") throw new Error("email must be text");
        return User.users.find(user => user.email === email.toLowerCase());
    }

    static getUserById(id) {
        return User.users.find(user => user.id === id);
    }

    static signIn(email, password) {
        if (typeof email !== "string") throw new Error("email must be text");
        const signInUser = User.getUserByEmail(email);
        if (!signInUser || !signInUser.isAuthenticated(password)) return { user: undefined, message: "Invalid Email/Password" };
        signInUser.signIn();
        return { user: signInUser, message: "Success" };
    }

    addPaymentMethod(paymentMethod) {
        if (this.validatePaymentMethod(paymentMethod)) {
            this.paymentMethods = [...this.paymentMethods, paymentMethod];
        }
    }

    validatePaymentMethod(paymentMethod) {
        // pseudo validate
        return true;
    }

    getPaymentMethods() {
        return [...this.paymentMethods];
    }

    addScooter(scooter) {
        this.currentScooters = [...this.currentScooters, scooter];
    }

    isAuthenticated(password) {
        return password === this.password;
    }

    signIn() {
        this.isSignedIn = true;
    }

    signOut() {
        this.isSignedIn = false;
    }
}

export default User;