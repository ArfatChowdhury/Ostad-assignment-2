import { students } from "./data.js";

export let copyOfStudents = [...students];

let id = 4;
export const addStudent = (name, scores) => {
    const newStudent = {
        id: id++,
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


export function getAllAverages() {
    console.log("📈 Student Averages:");
    
    for (const student of copyOfStudents) {
      const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
      console.log(`${student.name}: ${Math.round(average)}`);
    }
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

function averageM() {
    let averageOfAll = []
    let totalAvg = 0
    for (const student of copyOfStudents) {
        const sumOfAll = student.scores.reduce((sum, score) => sum + score, 0)
        const averageStd = sumOfAll / student.scores.length

        const allStudentAvg = [...averageOfAll, { name: student.name, average: averageStd }]

        totalAvg += averageStd
        averageOfAll = allStudentAvg
    }
    const overallAvg = totalAvg / copyOfStudents.length
    return overallAvg
    // console.log(`avg of all` , averageOfAll)
    // console.log(`total avg`, totalAvg)
    // console.log (`overall average of class`, overallAvg)
}




export const getSummary = () => {
    const allStudentAverage = copyOfStudents.map(student => {
        const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
        return { name: student.name, average };
    })
    const topPerformers = allStudentAverage.filter(student => student.average >= 80).sort((a, b) => b.average - a.average);

    const lowestPerformers = allStudentAverage.filter(student => student.average <= 80).sort((a, b) => a.average - b.average);


    // const overallAverages(){}

    const summary = {
        allStudents: allStudentAverage,
        topPerformers,
        lowestPerformers,
        overallAvg: averageM(),
        highestAverage: topPerformers[0],
        lowestAverage: lowestPerformers[0]
    };

    console.log('=== Summary ===');
    console.log('All Student:', allStudentAverage.length)
    console.log(`overall avg of class`, averageM())
    console.log('Highest Average:', topPerformers[0]?.name);
    console.log('Lowest Average:', lowestPerformers[0]?.name);

    return summary;
}


export const updateScore = (id, scoreIndex, newScore) => {
    let updatedScore = []

    const updateStudent = copyOfStudents.find(s => s.id === id)
    // updateStudent[scoreIndex] = newScore
    updateStudent.scores[scoreIndex] = newScore

    updatedScore = [...copyOfStudents, updateStudent.scores]

    console.log(`'s score has been updated`, updatedScore);

}

export const printAllStudents = () => {
    copyOfStudents.forEach(student => console.log(`Id: ${student.id} ,Name:${student.name}, Scores: ${student.scores}`))

}
// updateScore(1,2,60)

// addStudent("Johny", [80, 90, 33])
// addStudent("Johny2", [80, 90, 33])

// getTopPerformers()
// getSummary()

// printAllStudents()
// // averageM()

// getAllAverages()