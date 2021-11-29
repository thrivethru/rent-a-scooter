import User from '../src/user.js';
import Scooter from '../src/scooter.js';

describe("User class", () => {
    const testScooter = new Scooter();
    const name = "John";
    const license = "1234";
    const email = "mark@me.com";
    const phone = "555-555-5555";
    const age = 20;
    const password = "Secret"
    const testUser = new User(name, license, email, phone, age, password);
    
    test("Creates a user instance", () => {
        expect(testUser).toBeDefined();
        expect(testUser instanceof User).toBeTruthy();
    });

    test("A user must have an age that is 18 or older", () => {
        const ageUnder = 15;
        expect(() => new User(name, license, email, phone, ageUnder, password)).toThrowError("user must be 18 or older");
        expect(testUser.age).toBe(age);
    });

    test("A user can add a payment method", () => {
        const paymentMethod = "Visa";
        expect(testUser.paymentMethods.length).toBe(0);
        testUser.addPaymentMethod(paymentMethod);
        expect(testUser.paymentMethods.length).toBe(1);
        expect(testUser.paymentMethods[0]).toBe(paymentMethod);
    });

    test("can add a scooter", () => {
        expect(testUser.currentScooters.length).toBe(0);
        testUser.addScooter(testScooter);
        expect(testUser.currentScooters.length).toBe(1);
        expect(testUser.currentScooters[0]).toBe(testScooter);
    });

    test("starts with signed in status false", () => {
        expect(testUser.isSignedIn).toBe(false);
    });

    test("can sign in users", () => {
        const badEmail = "bad@email.com";
        const badPassword = "notsecret";
        const signInStatusBadEmail = User.signIn(badEmail, password);
        expect(signInStatusBadEmail.user).toBeUndefined();
        expect(signInStatusBadEmail.message).toBe("Invalid Email/Password");
        const signInStatusBadPassword = User.signIn(email, badPassword);
        expect(signInStatusBadPassword.user).toBeUndefined();
        expect(signInStatusBadPassword.message).toBe("Invalid Email/Password");
        const signInStatusValid = User.signIn(email, password);
        expect(signInStatusValid.user).toBe(testUser);
        expect(signInStatusValid.message).toBe("Success");
        expect(testUser.isSignedIn).toBe(true);
    });
});