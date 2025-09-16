// Interface describing the student object's structure (the instance side)
interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the constructor of the StudentClass (the static side)
interface StudentConstructor {
  new(firstName: string, lastName: string): Student;
}

// Class implementation that adheres to both interfaces
class StudentClass implements Student {
  firstName: string;
  lastName: string;

  /**
   * Creates an instance of StudentClass.
   * @param firstName - The first name of the student.
   * @param lastName - The last name of the student.
   */
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Returns a string indicating the student is working.
   * @returns The string "Currently working".
   */
  workOnHomework(): string {
    return 'Currently working';
  }

  /**
   * Returns the first name of the student.
   * @returns The student's first name.
   */
  displayName(): string {
    return this.firstName;
  }
}

// Example usage (optional, for demonstration)
const student: Student = new StudentClass('John', 'Doe');

console.log(student.displayName());
console.log(student.workOnHomework());
