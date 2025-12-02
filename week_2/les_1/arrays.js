const games = ["Super Mario Bros", "Zelda", "N+ Game", "Pokemon"];
const favoriteGames = [{
    name: "Super Mario Bros",
    releaseYear: 1980
}, {
    name: "Zelda",
    releaseYear: 1984
}];

const altGames = new Array();
Array.isArray(games); // true

const secondGame = games[1];
const altSecondGame = games.at(1);
const lastGame = games.at(-1); // games[length - 1];

const values = [
    "Adriaan",
    function () {
        console.log("Hello!");
    }
];

const amountOfFavGames = favoriteGames.length;

games.length = 3;
const topThree = games;

games.length = 100;
// console.log(games);


const stringArray = "[1, 2, 3, 4]";
const numbers = JSON.parse(stringArray);
console.log(typeof stringArray, typeof numbers);

// stringArray.push(5);
numbers.push(5);

const numbersString = JSON.stringify(numbers);
console.log(stringArray, numbers, numbersString)

const students = ["Nick", "Mert", "Yens"];
const people = ["Nick", "Mert", "Yens"];

const teacher = "Adriaan";
const friend = "Adriaan";

console.log(teacher === friend); // true
console.log(students === people); // false

function areArrayEqual() {

}

function areArraysEquel(arrOne, arrTwo) {
    if (arrOne.length !== arrTwo.length) {
        return false;
    }

    return JSON.stringify(arrOne) === JSON.stringify(arrTwo);
}

console.log(areArraysEquel(students, people));

const matrix = [
    ['0', '0', '0', '0'],
    ['0', 'X', '0', '0'],
    ['0', '0', '0', '0'],
    ['0', '0', '0', '0'],
]

matrix[1][1];

const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
    const currentColor = colors[i];
    console.log(currentColor);
}

for (const color of colors) {
    console.log(color);
};

colors.forEach((color) => {
    console.log(color);
});

colors.forEach(function (color) {
    console.log(color);
});

colors.push("Eind") // Eind.
colors.pop() // Eind verwijderen.
colors.unshift("Begin van array toevoegen");
colors.shift() // Begin verwijderen.

console.log('Numbers', numbers)
const doubleNumbers = numbers.map((value, index) => {
    if (value == 2) {
        return value;
    }

    return value * 2;
});
console.log('Double Numbers', doubleNumbers)

console.log('Double Numbers as String', doubleNumbers.join('|'))

const numbersWithoutEight = doubleNumbers.filter((value) => {
    return value !== 8;
})

console.log(numbersWithoutEight)

numbers.some((number) => {
    return number === 8;
})
numbers.some((number) => number === 8);

numbers.every((number) => {
    return number === 8;
})

// Reduce -> Minder maken
// Van een array naar 1 getal te gaan (meestal een som/optelling)

const sales = [4, 10, 6];

const totalSales = sales.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
});

// Loop 1: 0 + 4 -> 4
// Loop 2: 4 + 10 -> 14
// Loop 3: 14 + 6 -> 20

const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
];

const totalProductsPrice = products.reduce((prevReturnedPrice, productObject) => {
    return prevReturnedPrice + productObject.price;
}, 0);

console.log(totalProductsPrice);


const studentsAlt = [
    { name: "Alice", age: 25, subject: "Math" },
    { name: "Bob", age: 30, subject: "Science" },
    { name: "Charlie", age: 28, subject: "History" },
];

// Initialize an empty object to store subject groups

// Loop through each student and add them to their respective subject group
const subjectMapReduce = studentsAlt.reduce((map, student) => {
    const subject = student.subject;
    map[subject] = map[subject] || [];
    map[subject].push(student);
    return map;
}, {});

console.log("Subject map (loop):", subjectMapReduce);