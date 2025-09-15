// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number; // mandatory property
}

// Create a teacher
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
};

// Create a director
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 10,
  contract: false,
};

// Output
console.log(teacher1);
console.log(director1);
