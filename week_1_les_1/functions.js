function sum(a, b) {
    return a + b;
}

const name = "Hasan";
const division = () => {};
const multiplier = function() {};

function selectRandomStudent(arr) {
    const randomName = Math.floor(Math.random() * arr.length);
    return arr[randomName];
}

const age = 21;
const students = ['Hasan', 'Rumeysa', 'Bondur'];

console.log(sum(age, 12));
console.log(20);
console.log(selectRandomStudent(students))

function showMessage() {
    console.log('Answer Checker Message');
}

function checkAnswer(answer, solution, callback) {
    if (answer === solution) {
        callback();
        return true; 
    }
    callback();
    return false;
}

checkAnswer('Ja', 'Ja', showMessage);

