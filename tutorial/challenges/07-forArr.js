let names = ['anna', 'gabriela', 'juana'];
let lastNames = 'Rodriguez';
let newArr = [];

for (let i = 0; i < names.length; i++) {
  newArr.push(`${names[i]} ${lastNames}`);
}
console.log(newArr);

//este console log de object está bacano:

let gas = 32;
let food = 15;
let water = 22;

console.log({
  gass: gas,
  chikens: food,
  agua: water,
});
