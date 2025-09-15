// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number; // mandatory property
}

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function declaration implementing the interface
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Example Teacher objects
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'Paris',
};

// Example Director object
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 10,
  contract: false, // arbitrary property
};

// Outputs
console.log(teacher1);
console.log(teacher2);
console.log(director1);

// Test the printTeacher function
console.log(printTeacher("John", "Doe"));      // J. Doe
console.log(printTeacher("Alice", "Johnson")); // A. John
