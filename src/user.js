import Person from './person.js';

class User extends Person {
    constructor(name, license, email, phone, age) {
        if (age < 18) throw new Error("user must be 18 or older");
        super(name, license, email, phone);
        this.age = age;
        this.paymentMethods = [];
        this.currentScooters = [];
        // this.rentalHistory = [];
        // this.paymentHistory = [];
    }

    addPaymentMethod(paymentMethod) {
        this.paymentMethods = [...this.paymentMethods, paymentMethod];
    }

    addScooter(scooter) {
        this.currentScooters = [...this.currentScooters, scooter];
    }
}

export default User;