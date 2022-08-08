// LOGICAL OPERATORS
let num1 = 10;
let num2 = 20;
let num3 = "10";
let word1 = "Hello";
let word2 = "hello";

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(!true);
console.log(!false);
console.log(num1 == num3);
console.log(num1 === num3); // equality check
console.log(word1 === word2);
console.log(word1 == word2);
console.log(word1 !== word2);

// CONTROL FLOW

let item = "U2";

if (item === "Annapurna") {
    console.log("Buy Annapurna");
} else if (item === "U2") {
    console.log("Buy U2");
} else {
    console.log("Buy Rocky Salt");
}

// GRADING SYSTEM

let score = 100;
if (score >= 0 && score <= 100) {
if (score >= 90 ) {
    console.log("Excellent");
} else if (score >= 80) {
console.log("Very Good"); 
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 60) {
    console.log("Average");
} else if (score >= 50) {
    console.log("Credit");
} else if (score >= 40) {
    console.log("Pass");
} else if (score >= 0) {
    console.log("Fail");
} else {
    console.log("please enter a valid score");
}
}

// FUNCTION

function sum(a, b) {
    console.log(b);
    let total = a + b;
    return total;
    // console.log(a + b); // its wont work of the return
}


let eleven = sum(5, 7);
console.log(eleven);
let fifteen = sum(7, 8);
let nineteen = sum(9, 10);

function multiply(a, b = 3) {
    // multiply = a * b;
    let total = a * b;
    return total;
    // console.log(a*b);
}

let ten = multiply(5);
console.log(ten);
let twenty = multiply(4, 5)
let fifty = multiply(5, 10)

// multiply(5, 2);
// multiply(4, 5);
// multiply(5, 10);

// LOOPS - does repeatitive tasks

// for loop
for (let i = 1;i <= 10; i++) {
    console.log(i + ".I will not talk in class again");
}

// while loop
let num = 1
while(num <= 10) {
    console.log(num);

    num = num + 1
}


// do... while loop
let age = 100;
do {
    console.log(age + ". You can't vote");
    age++;
} while (age < 18);

// Array methods
let ages = [19, 26, 24, 18, 22, 35, 30, 33, 31, 29, 18];

for (let age of ages) { // of is fo array and in is for object
    console.log(Math.pow(age, 2));
}

// Filter
// let marriage = ages.filter(function (mark)) {
//     return mark > 25;
// };

let marriage = ages.filter((mark) => mark > 25);
console.log(marriage);

// MAP
let squares = ages.map((age) => Math.pow(age, 2));
console.log(squares);

// fIND
let eighteen = ages.find((age) => age === 18);
console.log(eighteen);