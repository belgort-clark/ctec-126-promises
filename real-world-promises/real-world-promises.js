const gradeAssignmentOne = new Promise((resolve, reject) => {
    resolve('Assignment 1 Graded')
})

const gradeAssignmentTwo = new Promise((resolve, reject) => {
    resolve('Assignment 2 Graded')
})

const gradeAssignmentThree = new Promise((resolve, reject) => {
    resolve('Assignment 3 Graded')
})

Promise.all([
    gradeAssignmentOne,
    gradeAssignmentTwo,
    gradeAssignmentThree
]).then(messages => {
    console.log(messages)
})

Promise.race([
    gradeAssignmentOne,
    gradeAssignmentTwo,
    gradeAssignmentThree
]).then(message => {
    console.log(message)
})