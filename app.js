// function plus(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }

// function divide(a, b, c, d, e) {
//     console.log(a / b / c / d / e);
// }
// const player = {
//     name: "nico",
//     sayHello: function (otherPersonsName) {
//         console.log(player.name + " say hello to " + otherPersonsName);
//     }
// };

// plus(1, 2);
// divide(2, 3, 4, 5, 6);
// player.sayHello("Sang");
// plus(1, 2);


// const a = [1, 2, player, divide];
// a.push(player.sayHello);
// console.log(a[4]("Hyun"));
// console.log(a[3](100, 2, 5, 4, 10, 8));
// console.log(a[2].sayHello("Hong"));

// const calculator = {
//     plus: function (a, b) {
//         return (a + b);
//     },
//     minus: function (a, b) {
//         return (a - b);
//     },
//     time: function (a, b) {
//         return (a * b);
//     },
//     divide: function (a, b) {
//         return (a / b);
//     },
//     power: function (a, b) {
//         return (a ** b);
//     }
// }
// const x = 3;
// const y = 2;
// console.log(calculator.plus(x, y));
// console.log(calculator.minus(x, y));
// console.log(calculator.time(x, y));
// console.log(calculator.divide(x, y));
// console.log(calculator.power(x, y));

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);

// let age = parseInt(prompt("How old are you?"));
// if (isNaN(age) || age <= 0) {
//     console.log("Please write a real posotive number");
// } else if (age < 18) {
//     console.log("you are too young");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//     console.log("You should not drink")
// } else if (age === 100) {
//     console.log("Wow you are wise");
// } else if (age > 80) {
//     console.log("You can't drink");
// };


// const myTitle = document.getElementById("title");
// myTitle.innerText = "Got you!";
// console.log(myTitle.id); // title
// console.log(myTitle.className); // Hello

const hellos = document.getElementsByClassName("hello");
console.log(hellos);
console.log(hellos[0].textContent);