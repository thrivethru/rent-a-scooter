const App = require('../src/app');

describe("App class", () => {
    const testApp = new App();
    test("Creates a app instance", () => {
        expect(testApp).toBeDefined();
        expect(testApp instanceof App).toBeTruthy();
    });
});