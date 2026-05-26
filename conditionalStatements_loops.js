let temp = 18;


if (temp < 0) {
    console.log("It's freezing!");
} else if (temp >= 0 && temp <= 15) {
    console.log("It's cold.");
} else if (temp >= 16 && temp <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}


switch (true) {
    case (temp < 0):
        console.log("It's freezing!");
        break;
    case (temp >= 0 && temp <= 15):
        console.log("It's cold.");
        break;
    case (temp >= 16 && temp <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}



let checkNum = 6;


if (checkNum % 2 === 0 && checkNum % 3 === 0) {
    console.log("Divisible by both.");
} else if (checkNum % 2 === 0) {
    console.log("Divisible by 2.");
} else if (checkNum % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}


switch (true) {
    case (checkNum % 2 === 0 && checkNum % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (checkNum % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (checkNum % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}



for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


let sumFor = 0;
for (let i = 1; i <= 100; i++) {
    sumFor += i;
}
console.log("Sum 1 to 100 (For Loop):", sumFor);


const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log("Array element:", numbers1[i]);
}


const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i]; 
    }
}
console.log("Largest number:", largest);



let w = 1;
while (w <= 10) {
    console.log(w);
    w++;
}


let e = 2;
while (e <= 20) {
    console.log(e);
    e += 2;
}


let sumWhile = 0;
let s = 1;
while (s <= 100) {
    sumWhile += s;
    s++;
}
console.log("Sum 1 to 100 (While Loop):", sumWhile);


let m = 1;
while (m < 50) {
    if (m % 5 === 0) {
        console.log("Multiple of 5:", m);
    }
    m++;
}



let dw = 1;
do {
    console.log(dw);
    dw++;
} while (dw <= 10);


let sumDoWhile = 0;
let ds = 1;
do {
    sumDoWhile += ds;
    ds++;
} while (ds <= 100);
console.log("Sum 1 to 100 (Do While):", sumDoWhile);


console.log("\n--- Simulating User Input for Number > 10 ---");

let userInputs = [4, 8, 15]; 
let index = 0;
let validNumber;

do {
    validNumber = userInputs[index];
    console.log("Prompt: Enter a number greater than 10. User entered:", validNumber);
    index++;
} while (validNumber <= 10);
console.log("Success! Valid number entered:", validNumber);


console.log("\n--- Simulating Guessing Game ---");
const correctNumber = 7; 

let userGuesses = [3, 9, 7]; 
let guessIndex = 0;
let currentGuess;

do {
    currentGuess = userGuesses[guessIndex];
    console.log("Prompt: Guess a number between 1 and 10. User guessed:", currentGuess);
    
    if (currentGuess !== correctNumber) {
        console.log("Wrong! Try again.");
    }
    guessIndex++;
} while (currentGuess !== correctNumber);

console.log("Congratulations! You guessed it right.");