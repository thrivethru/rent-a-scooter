import Station from '../src/station.js';
import Scooter from '../src/scooter.js';

describe("Station class", () => {
    const location = "Main";
    const capacity = 20;
    const testStation = new Station(location, capacity);
    const testScooter = new Scooter();

    test("Creates a station instance", () => {
        expect(testStation).toBeDefined();
        expect(testStation instanceof Station).toBeTruthy();
    });

    test("can list stations", () => {
        const stationsA = Station.listLocations();
        expect(stationsA.length).toBe(1);
        const locationB = "2nd";
        const capacityB = 15;
        const testStationB = new Station(locationB, capacityB);
        const stationsB = Station.listLocations();
        expect(stationsA.length).toBe(1);
        expect(stationsB.length).toBe(2);
        expect(stationsB.every(station => station instanceof Station)).toBeTruthy();
    });
    
    test("if there are no available scooters, returns undefined", () => {
        expect(testStation.scooters.length).toBe(0);
        const availableScooter = testStation.getAvailableScooter();
        expect(availableScooter).toBeUndefined();
    });

    test("can dock a scooter", () => {
        expect(testStation.scooters.length).toBe(0);
        testStation.dockScooter(testScooter);
        expect(testStation.scooters.length).toBe(1);
        expect(testStation.scooters[0] instanceof Scooter).toBeTruthy();
        expect(testStation.scooters[0]).toBe(testScooter);
    });

    test("can return an available scooter", () => {
        const availableScooter = testStation.getAvailableScooter();
        expect(availableScooter).toBeDefined();
        expect(availableScooter instanceof Scooter).toBeTruthy();
    });

    test("can undock a scooter", () => {
        const availableScooter = testStation.getAvailableScooter();
        expect(testStation.scooters.find(scooter => scooter.id === availableScooter.id)).toBeTruthy()
        testStation.unDockScooter(availableScooter.id);
        expect(testStation.scooters.find(scooter => scooter.id === availableScooter.id)).toBeFalsy()
    });
});