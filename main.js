import { students } from './data.js';
import { copyOfStudents } from './function.js';
import {
  calculateAverage,
  addStudent,
  getTopPerformers,
  getSummary,
  updateScore,
  printAllStudents,
  getAllAverages
} from './function.js';

// Initial state
console.log("=== INITIAL STUDENT DATA ===");
printAllStudents();

// 1. Test calculateAverage()
console.log("\n=== TEST calculateAverage() ===");
console.log(calculateAverage(1));  // Mr ovro's average
console.log(calculateAverage(4));  // Jill Johnson's average


// 2. Test addStudent()
console.log("\n=== TEST addStudent() ===");
console.log(addStudent("Emma Watson", [92, 94, 88])); // New student
console.log(addStudent("John Doe", [78, 85, 82]));    // Another student
console.log("Updated student list:");
printAllStudents();

// 3. Test getTopPerformers()
console.log("\n=== TEST getTopPerformers() ===");
getTopPerformers();

// 4. Test updateScore()
console.log("\n=== TEST updateScore() ===");
console.log(updateScore(4, 1, 89)); // Fix Jill's typo (4 → 89)
console.log("After update:");
printAllStudents();

// 5. Test getAllAverages()
console.log("\n=== TEST getAllAverages() ===");
getAllAverages();

// 6. Test getSummary()
console.log("\n=== TEST getSummary() ===");
getSummary();

// Final verification
console.log("\n=== FINAL copyOfStudents ===");
console.log(copyOfStudents);