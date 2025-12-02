//==============Array waarde==============//
let fruits = ['Apples', 'Pear', 'Orange'];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push('Banana');

// what's in fruits?
console.log(fruits.length); // 4
//==============Multidimensional arrays==============//
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matrix = [
    [getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100)], // Rij 0
    [getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100)]  // Rij 1
];

console.log("De gegenereerde Matrix (2x3):");
console.log(matrix);
//==============For of, foreach==============//
const numbers = [1, 2, 3, 4, 5];

console.log("--- Itereren over de 'numbers' array met for...of ---");

for (const number of numbers) {
    console.log(number);
}
const text = "Hello";

console.log("--- Itereren over de string 'Hello' met for...of ---");

for (const char of text) {
    console.log(char);
}
const colors = ['red', 'blue', 'green', 'yellow'];

console.log("--- Itereren over de 'colors' array met forEach (inclusief index) ---");

colors.forEach((color, index) => {
    console.log(`Index ${index}: ${color}`);
});
//==============Methods - strings==============//
const woorden = [
    'mal',
    'snurkduif',
    'bromvlieg',
    'snottebel',
    'knotsgek',
    'pindakaas',
    'fluitketel',
    'smurfenmuts',
];

console.log("--- Originele Array ---");
console.log(woorden);

let resultaat;

console.log("\n--- 1. Array verbinden met koppelteken (.join('-')) ---");
resultaat = woorden.join('-');
console.log(resultaat);

console.log("\n--- 2. Ten minste één woord begint met 'B' (.some()) ---");
const begintMetB = woorden.some(woord => woord.startsWith('b'));
console.log(`Begint ten minste één woord met 'B'? ${begintMetB}`);

console.log("\n--- 3. 'Hello' toevoegen aan begin (.unshift()) ---");
woorden.unshift('Hello');
console.log("Nieuwe array na unshift:");
console.log(woorden);

console.log("\n--- 4. Alle woorden hebben meer dan 2 letters (.every()) ---");
const meerDanTweeLetters = woorden.every(woord => woord.length > 2);
console.log(`Hebben alle woorden meer dan 2 letters? ${meerDanTweeLetters}`);

console.log("\n--- 5. Array sorteren (.sort()) ---");
const gesorteerdeWoorden = [...woorden].sort(); // Maak een kopie voordat je sorteert
console.log(gesorteerdeWoorden);

console.log("\n--- 6. Element op derde positie (index 2) ---");
resultaat = woorden[2];
console.log(`Het woord op de derde positie is: ${resultaat}`);

console.log("\n--- 7. Woorden filteren die langer zijn dan 4 letters (.filter()) ---");
const langeWoorden = woorden.filter(woord => woord.length > 4);
console.log(langeWoorden);
//==============Methods - numbers==============//
let willekeurigeGetallen = [23, 7, 45, 12, 87, 3, 56, 19, 34, 91];
console.log("Startarray:", willekeurigeGetallen);

let groterDanTien = willekeurigeGetallen.filter(getal => getal > 10);
console.log("1. Getallen > 10:", groterDanTien);

willekeurigeGetallen = groterDanTien;
console.log("Array na filter:", willekeurigeGetallen);

const laatsteElement = willekeurigeGetallen.pop();
console.log("2. Verwijderd laatste element:", laatsteElement);
console.log("Array na pop():", willekeurigeGetallen);

const eersteElement = willekeurigeGetallen.shift();
console.log("3. Verwijderd eerste element:", eersteElement);
console.log("Array na shift():", willekeurigeGetallen);

willekeurigeGetallen.push(5);
console.log("4. Array na push(5):", willekeurigeGetallen);

const allesKleinerDanTwintig = willekeurigeGetallen.every(getal => getal < 20);
console.log("5. Zijn alle getallen < 20?:", allesKleinerDanTwintig);

const arrayAlsString = willekeurigeGetallen.join(" ");
console.log("6. Array als string:", arrayAlsString);

const somVanGetallen = willekeurigeGetallen.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("7. Som van de getallen:", somVanGetallen);

const verdubbeldeGetallen = willekeurigeGetallen.map(getal => getal * 2);
console.log("8. Verdubbelde getallen:", verdubbeldeGetallen);

const eenGetalGroterDanDertig = willekeurigeGetallen.some(getal => getal > 30);
console.log("9. Is ten minste één getal > 30?:", eenGetalGroterDanDertig);
//==============Optellen arrays==============//
function OptellenArrays(arr1, arr2) {
    const resultaat = [];

    for (let i = 0; i < arr1.length; i++) {
        const som = arr1[i] + arr2[i];
        resultaat.push(som)
    }
    return resultaat;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const resultaatSom = OptellenArrays(arr1, arr2);
console.log(resultaatSom);
//==============Langste woord in array==============//
let woordenArray = ['appel', 'peer', 'kiwi', 'banaan'];

function vindLangsteWoord(arr) {
    if (arr.length === 0) {
        return "";
    }
    let langsteWoord = arr[0];

    for (const huidigWoord of arr) {
        if (huidigWoord.length > langsteWoord.length) {
            langsteWoord = huidigWoord;
        }
    }
    return langsteWoord;
}
let langsteWoord = vindLangsteWoord(woordenArray);
console.log(`De langste string in de array is: ${langeWoorden}`); 
let testArray = ['huis', 'Auto', 'fiets', 'train'];
let langsteTestWoord = vindLangsteWoord(woordenArray);
console.log(`Langste woord in testArray: ${langsteTestWoord}`);
//==============Even getallen filteren==============//
function filterEvenGetallen(getallen) {
    const evenGetallen = getallen.filter(getal => {
        return getal % 2 === 0;
    })
    return evenGetallen;
}

let alleGetallen = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(alleGetallen);
console.log(evenGetallen);
//==============Sorteren op object eigenschap==============//
function sorterenOpEigenschap(objecten, eigenschap) {
    return objecten.sort((a, b) => {
        const waardeA = a[eigenschap];
        const waardeB = b[eigenschap];

        if (waardeA < waardeB) {
            return -1;
        }
        if (waardeA > waardeB) {
            return 1;
        }
        return 0;
    });
}
let objectenArray = [
    { naam: 'Anna', leeftijd: 30 },
    { naam: 'Bob', leeftijd: 25 },
    { naam: 'Charlie', leeftijd: 35 },
];
console.log("Gesorteerd op Naam");
let gesorteerdOpNaam = sorterenOpEigenschap(objectenArray, 'naam');

console.log(gesorteerdOpNaam);
console.log("Gesorteerd op Lijftijd");
let gesorteerdOpLijftijd = sorterenOpEigenschap(objectenArray, 'Lijftijd');
console.log(gesorteerdOpLijftijd);
//==============Oefening Auto==============//
const auto = {
    merk: "Toyota",
    model: "Camry",
    jaar: 2022,
    kleur: "blauw"
};
console.log("Object Gecreëerd")
console.log(auto)

auto.kleur = "rood";
console.log("Kleur gewijzigd naar roog");
console.log(auto);

const merkNaam = auto.merk;

console.log("Waarde opgehaald");
console.log(`Het merk van de auto is:, ${merkNaam}`);


auto.brandstof = "benzine";

console.log("Eigenschap 'brandstof' toegevoegd");
console.log(auto);

delete auto.jaar;
console.log("Eigenschap 'jaar' verwijderd")
console.log(auto);
//==============Oefening Persoon==============//
let persoon = {
    naam: "Anna",
    leeftijd: 25,
    adres: {
        straat: "Hoofdstraat",
        nummer: 123,
        stad: "Stadsville"
    }
};
const straatnummer = persoon.adres.nummer;
console.log(straatnummer);

persoon.telefoon = "06-12345678";

const extraInfo = {
    hobby: "Lezan",
    favorieteKleur: "groen",
    beroep: "programmeur"
};
persoon = {
    ...persoon,
    ...extraInfo
};
console.log(persoon)