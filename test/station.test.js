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
    
    test("can dock a scooter", () => {
        testStation.dockScooter(testScooter);
        // TODO: add test
    });

    test("can undock a scooter", () => {
        testStation.unDockScooter(testScooter.id);
        // TODO: add test
    });
});