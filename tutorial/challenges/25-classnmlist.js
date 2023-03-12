// className
// classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

// const classValue = first.className;
// console.log(classValue);

second.className = 'colors';
second.className = 'text';

// third.classList.add('colors');
// third.classList.add('text');
third.classList.add('text', 'colors');
third.classList.remove('text');

let result = third.classList.contains('text');
if (result) {
  console.log('yup');
} else {
  console.log('nokz');
}

const classValues = third.classList;
console.log(classValues);
