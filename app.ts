// Numeric Types
var age = 25;
var largeNumber = 9007199254740991n;
// String Type
var name = "John Doe";
// Boolean Type
var isStudent = true;
// Array Types
var scores = [85, 90, 95];
var colors = ["red", "green", "blue"];
var answers = [true, false, true];
// Tuple Type
var person = ["Alice", 30];
// Enum Type
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var currentDirection = Direction.North;
// Any Type
var randomValue = "Hello";
// Void Type
function logMessage(message) {
    console.log(message);
}
// Null and Undefined Types
var emptyValue = null;
var notAssigned = undefined;
// Function Declarations
function addNumbers(a, b) {
    return a + b;
}
function greetPerson(personName) {
    return "Hello, ".concat(personName, "!");
}
var user = {
    id: 1,
    name: "John Doe",
    isActive: true,
};
var product = {
    id: 101,
    name: "Laptop",
    price: 75000,
};
// Testing the application
console.log("Age:", age);
console.log("Large Number:", largeNumber);
console.log("Name:", name);
console.log("Is Student:", isStudent);
console.log("Scores:", scores);
console.log("Colors:", colors);
console.log("Answers:", answers);
console.log("Person:", person);
console.log("Current Direction:", currentDirection);
console.log("Random Value:", randomValue);
logMessage("This is a log message.");
console.log("Empty Value:", emptyValue);
console.log("Not Assigned:", notAssigned);
console.log("Add Numbers:", addNumbers(10, 20));
console.log("Greet Person:", greetPerson("Alice"));
console.log("User:", user);
console.log("Product:", product);
