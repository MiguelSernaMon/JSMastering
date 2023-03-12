//forEach
//It does not return a new array
const people = [
  { name: 'adam', age: 32, postion: 'developer' },
  { name: 'tom', age: 19, postion: 'desinger' },
  { name: 'susy', age: 23, postion: 'the boss' },
];

function showPerson(person) {
  console.log(person.postion.toUpperCase());
}
people.forEach(showPerson);

//Another way
people.forEach(function (item) {
  console.log(item.postion.toUpperCase());
});
