// Base class: Person
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayDetails(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Derived class: Student
class Student extends Person {
    studentId: number;
    course: string;
    semester: number;

    constructor(name: string, age: number, studentId: number, course: string, semester: number) {
        super(name, age); // Call the constructor of the base class
        this.studentId = studentId;
        this.course = course;
        this.semester = semester;
    }

    displayDetails(): void {
        super.displayDetails(); // Call the base class method
        console.log(`Student ID: ${this.studentId}, Course: ${this.course}, Semester: ${this.semester}`);
    }
}

// Derived class: Staff
class Staff extends Person {
    staffId: number;
    department: string;
    position: string;

    constructor(name: string, age: number, staffId: number, department: string, position: string) {
        super(name, age); // Call the constructor of the base class
        this.staffId = staffId;
        this.department = department;
        this.position = position;
    }

    displayDetails(): void {
        super.displayDetails(); // Call the base class method
        console.log(`Staff ID: ${this.staffId}, Department: ${this.department}, Position: ${this.position}`);
    }
}

// Testing the application

// Creating instances of Student
const student1 = new Student("Alice", 20, 101, "Computer Science", 4);
const student2 = new Student("Bob", 22, 102, "Mechanical Engineering", 6);

// Creating instances of Staff
const staff1 = new Staff("Dr. Smith", 45, 201, "Computer Science", "Professor");
const staff2 = new Staff("Ms. Johnson", 38, 202, "Administration", "Clerk");

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
