//filter
//it does return a new array
//can manipulate the size of a new array
//returns based on condition
const people = [
  { name: 'adam', age: 32, postion: 'developer' },
  { name: 'tom', age: 19, postion: 'desinger' },
  { name: 'susy', age: 23, postion: 'the boss' },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});
console.log(youngPeople);

const developers = people.filter(function (person) {
  return person.postion === 'senior developer';
});
console.log(developers);
