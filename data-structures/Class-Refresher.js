class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.timesLate = 0;
    this.scores = [];
  }

  // instance methods
  fullName() {  
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.timesLate += 1;
    if(this.timesLate >= 3) {
      return 'You are expelled!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.timesLate} time(s).`
  }

  calculateAverage() {
    const sum = this.scores.reduce((a,b) => a+b);
    return sum / this.scores.length;
  }

  // setter- interface to change data
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  // class method
  static enrollStudents(...students) {
    return "Enrolling Students"; 
  }
}

let firstStudent = new Student('Desi', 'Arnaz', 12);
let secondStudent = new Student('Juan', 'Peron', 11);

console.log(firstStudent.fullName());
console.log(secondStudent.fullName());

console.log(firstStudent.markLate());
console.log(secondStudent.markLate());

console.log(secondStudent.addScore(100));
console.log(secondStudent.addScore(92));

console.log(secondStudent.calculateAverage());

console.log(Student.enrollStudents());

// overview of class 
class DataStructure {
  constructor(setupData) {
    // what default properties should it have?
    this.setupData = setupData;
  }
  someInstanceMethod() {
    // what should each instance be able to do 
    return setupData;
  }

  // rarely use class/static methods
}


/*
The method to create new objects 
must be called constructor.

Class keyword creates a const, 
so it can't be redefined.

The class is just a pattern.
The new keyword calls the constructor behind the scenes,
to create the new instance of the class.

JS isn't really OOP.
It syntatic sugar, but helps to organize code.

Just defining the class won't do anything.
We need to instantiate the class 
to create a new instance.

this keyword refers to the instance of the class.

Instance methods:
Methods that the instance of the class can access.
They provide functionality to a instance.

Class /Static Methods:
Methods that can be called directly on the class
and does not need an instance.
Cannot be called thru an instance.
Used to create utility methods for a class.
Not related to the particular instance.

Uses static keyword.
*/