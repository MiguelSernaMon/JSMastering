//map
//it does return a new array
//does not change size of original array
//uses values from original array making new one
const people = [
  { name: 'adam', age: 32, postion: 'developer' },
  { name: 'tom', age: 19, postion: 'desinger' },
  { name: 'susy', age: 23, postion: 'the boss' },
];

const ages = people.map(function (person) {
  return person.age;
});

console.log('edades:', ages);

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});
console.log(newPeople);

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

console.log(names);

document.body.innerHTML = names.join('');
