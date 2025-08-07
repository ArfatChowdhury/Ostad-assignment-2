import { students } from "./data.js";


export const addStudent = (name, scores) => {
   const newStudent = {
    id: students.length + 1,
    name,
    scores
   }
  return [...students, newStudent];

}


export const calculateAverage = (id) => {
    const student = students.find(student => student.id === id);
    if (!student) {
        console.warn("Student not found");
        return;
    }
    //i take student and then i take scores and then i take sum of scores and then i take average of scores
   const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
   console.log(`Average score for ${student.name} is ${average}`);
    return average;
}


export const getAllAverage = () => {

}


export const getTopPerformers = () => {

}

export const getSummary = () => {

}

export const updateScore = (id, newScore) => {

}

export const printAllStudents = () => {

}