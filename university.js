var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class: Person
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Person;
}());
// Derived class: Student
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId, course, semester) {
        var _this = _super.call(this, name, age) || this; // Call the constructor of the base class
        _this.studentId = studentId;
        _this.course = course;
        _this.semester = semester;
        return _this;
    }
    Student.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this); // Call the base class method
        console.log("Student ID: ".concat(this.studentId, ", Course: ").concat(this.course, ", Semester: ").concat(this.semester));
    };
    return Student;
}(Person));
// Derived class: Staff
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, age, staffId, department, position) {
        var _this = _super.call(this, name, age) || this; // Call the constructor of the base class
        _this.staffId = staffId;
        _this.department = department;
        _this.position = position;
        return _this;
    }
    Staff.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this); // Call the base class method
        console.log("Staff ID: ".concat(this.staffId, ", Department: ").concat(this.department, ", Position: ").concat(this.position));
    };
    return Staff;
}(Person));
// Testing the application
// Creating instances of Student
var student1 = new Student("Alice", 20, 101, "Computer Science", 4);
var student2 = new Student("Bob", 22, 102, "Mechanical Engineering", 6);
// Creating instances of Staff
var staff1 = new Staff("Dr. Smith", 45, 201, "Computer Science", "Professor");
var staff2 = new Staff("Ms. Johnson", 38, 202, "Administration", "Clerk");
// Display details of students
console.log("Student Details:");
student1.displayDetails();
console.log("");
student2.displayDetails();
console.log("");
// Display details of staff
console.log("Staff Details:");
staff1.displayDetails();
console.log("");
staff2.displayDetails();
