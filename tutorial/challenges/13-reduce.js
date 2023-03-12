//reduce
//iterates, callback function
//reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people = [
  { name: 'adam', age: 32, postion: 'developer', salary: 200 },
  { name: 'tom', age: 19, postion: 'desinger', salary: 300 },
  { name: 'susy', age: 23, postion: 'the boss', salary: 500 },
];

const total = people.reduce((acc, currItem) => {
  console.log(`total ${acc}`);
  console.log(`current money ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 0);

console.log(total);
