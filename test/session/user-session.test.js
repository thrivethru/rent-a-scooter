import UserSession from '../../src/session/user-session.js';
import User from '../../src/user.js';

describe("UserSession class", () => {
    const name = "John";
    const license = "1234";
    const email = "mark@me.com";
    const phone = "555-555-5555";
    const age = 20;
    const password = "Secret"
    const testUser = new User(name, license, email, phone, age, password);

    const testUserSession = new UserSession(testUser);

    test("creates a user session instance", () => {
        expect(testUserSession).toBeDefined();
        expect(testUserSession instanceof UserSession).toBeTruthy();
    });
})