/*
SetTimeout - runs function once after specific time

- pass function reference
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearTimeout to cancel
- on window object
 */

function sayHello() {
  console.log('hello john');
}

// setTimeout(sayHello, 3000);

//alternative approach, ES6 arrow functions

// setTimeout(function () {
//   console.log('hello peter');
// }, 2000);

// pass arguments

function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

// setTimeout(showScore, 2000, 'gabriel', 3000);

const firstID = setTimeout(showScore, 2000, 'gabriel', 3000);
const secondID = setTimeout(showScore, 2000, 'peter', 34);
console.log(firstID);
console.log(secondID);
clearTimeout(firstID);
