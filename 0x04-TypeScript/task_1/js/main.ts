// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional arbitrary properties
}

// Create teachers
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

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // arbitrary property
};

// Output
console.log(teacher1);
console.log(teacher2);
console.log(teacher3)
