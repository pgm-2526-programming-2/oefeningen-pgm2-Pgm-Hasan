//==============Eenvoudige functie==============//
function greeting(daar) {
    return "Hallo " + daar + "!";
}
console.log(greeting("daar"));
//==============Functie met parameters==============//
function greeting(name) {
    return "Hallo " + name + "!";
}
console.log(greeting("Anna"));
//==============Standaard parameters==============//
function greeting(daar) {
    return "Hallo " + daar + "!";
}
console.log(greeting("daar"));
//==============Functie met parameters en interne logica==============//
function controlAge(age) {
if (age >= 18) {
    return "Volwassen";
} else {
    return "Nog niet volwassen";
}
}
console.log(controlAge(16));
console.log(controlAge(21));
//==============Return==============//
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
    return "Did parents allow you?";
}
}
console.log(checkAge(16))

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return "Did parents allow you?";
}
console.log(checkAge(21))
//==============Callback==============//
function mainLogic(callback) {
    callback();
}
function mycallback() {
    console.log("Dit is de callback-functie")
}
mainLogic(mycallback);
//==============Pass by==============//
function increaseByTen(num) {
    return num + 10;
}
let myNumber = 20;
myNumber = increaseByTen(myNumber);
console.log("Number:", myNumber)
//==============Scope==============//
let myValue = "Globale waarde";

function testScope() {
    let myValue = "Lokale waarde";
    console.log("Binnen de functie:", myValue)
}
testScope();
console.log("Binnen de functie:", myValue)
//==============Todo list==============//
const todoList = [
{
    task: "Complete Project",
    subtasks: [
    {
        task: "Write Code",
        subtasks: [
            { task: "Implement Feature A" },
            { task: "Test Feature A" },
            { task: "Refactor Code" },
        ],
    },
    {
        task: "Document Project",
        subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
    },
    ],
},
{
    task: "Prepare Presentation",
    subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery" }],
},
];
function showTasks(list) {
    list.forEach(item => {
        console.log(item.task);

        if(item.subtasks) {
            showTasks(item.subtasks);
        }
    });
}
showTasks(todoList);
//==============Efficient JS gebruiken==============//
// 1 //
function checkAge(age) {
    return age > 18 ? true : confirm("Did parents allow you?");
}
// 2 // 
function checkAge(age) {
    return age > 18 || confirm("Did parents allow you?");
}
console.log(checkAge(16));
console.log(checkAge(21)); 