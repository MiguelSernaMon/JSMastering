//find
//returns object
//return first match, if no match return undefined
//great for getting unique value

const people = [
  { name: 'adam', age: 32, postion: 'developer', id: 1 },
  { name: 'tom', age: 19, postion: 'desinger', id: 2 },
  { name: 'susy', age: 23, postion: 'the boss', id: 3 },
];

const person = people.find(function (person) {
  return person.id === 3;
});

console.log(person);

const names = ['adam', 'tom', 'susy'];
console.log(
  names.find(function (name) {
    return name === 'adam';
  })
);
