const User = require('../src/user');
const Scooter = require('../src/scooter');

describe("User class", () => {
    const testScooter = new Scooter();

    test("Creates a user instance", () => {
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        const age = 20;
        const testUser = new User(name, license, email, phone, age);
        expect(testUser).toBeDefined();
        expect(testUser instanceof User).toBeTruthy();
    });

    test("A user must have an age that is 18 or older", () => {
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        const ageA = 15;
        const ageB = 20;
        expect(() => new User(name, license, email, phone, ageA)).toThrowError("user must be 18 or older");
        const testUser = new User(name, license, email, phone, ageB);
        expect(testUser.age).toBe(ageB);
    });

    test("A user can add a payment method", () => {
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        const age = 20;
        const testUser = new User(name, license, email, phone, age);
        const paymentMethod = "Visa";
        expect(testUser.paymentMethods.length).toBe(0);
        testUser.addPaymentMethod(paymentMethod);
        expect(testUser.paymentMethods.length).toBe(1);
        expect(testUser.paymentMethods[0]).toBe(paymentMethod);
    });

    test("can add a scooter", () => {
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        const age = 20;
        const testUser = new User(name, license, email, phone, age);
        expect(testUser.currentScooters.length).toBe(0);
        testUser.addScooter(testScooter);
        expect(testUser.currentScooters.length).toBe(1);
        expect(testUser.currentScooters[0]).toBe(testScooter);
    });
});