const firstName = "Jan"; //Primitief
const age = 20; //Primitief
const isStudent = true; //Primitief
const hobbies = ["gaming", "soccer"]; //samengesteld of referentie  datatype
const address = {
    street: "New york straaat", //samengesteld of referentie  datatype
    number: 4,
};

let nickname = firstName;
const interests = hobbies;
const todos = interests;

interests.push("Kitesurfen");
nickname = "GamerBoy";

console.log(interests, hobbies, todos);

// ------------------------------------
let total = 0;

function addFiveToNumber(a = 0) {
  total = a + 5;
  console.log(a + 5);
}

addFiveToNumber(2);
console.log("Total:", total);

// -------------------------------------

function doubleNumber(num) {
    num = num * 2;
    console.log("Binnen functie: ", num);
}

function doubleNumberWithReference(obj) {
  obj.number = obj.number * 2;
    console.log("Binnen ref-functie", obj.number);
}

let originalNumber = 5;

let originalNumberAsReferenceType = {
    number: 5,
};

doubleNumber(originalNumber);

doubleNumberWithReference(originalNumberAsReferenceType);

console.log("Original number uit functie", originalNumber);

console.log("Original number uit functie", originalNumberAsReferenceType);

