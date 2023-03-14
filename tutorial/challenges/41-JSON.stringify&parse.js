// JSON.stringify(),JSON.parse()

const friends = ['anna', 'john', 'bobo'];

localStorage.setItem('friends', JSON.stringify(friends));

let values = JSON.parse(localStorage.getItem('friends'));
console.log(values);
console.log(friends);

let fruits;

if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}

console.log(fruits);
// fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits', JSON.stringify(fruits));
