const { assertEquals, assertTrue } = require(`../test-framework`);
const Airport = require(`../src/Airport`);
const Plane = require("../src/Plane");

let expected;
let actual;
let result;
let airport;
let plane;

// TEST 1: 
console.log(`--------------------------------------`);
console.log(`Test 1: airportPlanes length increases to 1 when addPlane is called with an instance of plane`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.addPlane(plane);
actual = airport.airportPlanes.length;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 1 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);

// TEST 2: 
console.log(`---------------------------------------------`);
console.log(`Test 2: check that the plane to land has the correct flightNumber`);

//Arrange
airport = new Airport();
plane = new Plane();

//Act
airport.landCorrectPlane();
actual = airport.landingPlane;

//Assert
result = assertTrue(actual);

console.log(`Test 2 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);

//TEST 3: 
console.log(`---------------------------------------------`);
console.log(`Test 3: The maximum length of airportPlanes is output as defaultCapacity`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = 0;

//Act
airport.getCapacity();
actual = airport.defaultCapacity;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 3 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);


// TEST 4: 
console.log(`---------------------------------------------`);
console.log(`Test 4: Need to be able to change the default capacity of the airport`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = 10;

//Act
airport.changeCapacity();
actual = airport.defaultCapacity;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 4 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);


// TEST 5: 
console.log(`---------------------------------------------`);
console.log(`Test 5:atDefaultCapacity() returns true if airportPlanes has reached it's defaultCapacity`);

//Arrange
airport = new Airport();
plane = new Plane();

//Act
airport.atDefaultCapacity();
actual = airport.airportFull;

//Assert
result = assertTrue(actual);

console.log(`Test 5 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);


// TEST 6: 
console.log(`---------------------------------------------`);
console.log(`Test 6: preventAirportPush() should return true if airportFull`);

//Arrange
airport = new Airport();
plane = new Plane();

//Act
airport.preventAirportPush();
actual = airport.noLandings;

//Assert
result = assertTrue(actual);

console.log(`Test 6 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);






