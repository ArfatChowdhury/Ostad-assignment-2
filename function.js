import { students } from "./data.js";

let copyOfStudents = [...students];
export const addStudent = (name, scores) => {
    const newStudent = {
        id: students.length + 1,
        name,
        scores
    }
    copyOfStudents = [...copyOfStudents, newStudent];
    return newStudent;

}


export const calculateAverage = (id) => {
    const student = copyOfStudents.find(student => student.id === id);
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
    let averageStudents = []

    for (const student of copyOfStudents) {
        const sum = student.scores.reduce((sum, score) => sum + score, 0)
        const average1 = sum / student.scores.length

        const studentAverage = [...averageStudents, { name: student.name, average: average1 }]
        averageStudents = studentAverage
    }
    const topPerformers = averageStudents.filter(student => student.average >= 80).sort((a, b) => b.average - a.average)
    // console.log(`Top performers:  ${topPerformers}`)
    for (const student of topPerformers) {
        console.log(`${student.name} has an average of ${student.average}`)
    }
    return topPerformers
}

export const getSummary = () => {
   const allStudentAverage = copyOfStudents.map(student => {
    const average = student.score.reduce((sum, score) => sum + score, 0) / student.scores.length
    return { name: student.name, average };
   })
   const topPerformers = allStudentAverage.filter(student => student.average >= 80).sort((a, b) => b.average - a.average);

   const lowestPerformers = studentsWithAverages.filter(student => student.average >= 80).sort((a, b) => a.average - b.average);


   const summary = {
    allStudents: allStudentAverage,
    topPerformers,
    lowestPerformers,
    highestAverage: topPerformers[0], 
    lowestAverage: lowestPerformers[0] 
};
}


export const updateScore = (id, newScore) => {

}

export const printAllStudents = () => {

}


getTopPerformers()

addStudent("John", [80, 90, 33])

getSummary()