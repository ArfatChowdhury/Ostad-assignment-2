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