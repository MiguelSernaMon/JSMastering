// const headings = document.getElementsByTagName('h2');
// headings[0].style.color = 'red';
// console.log(headings);

// const items = document.getElementsByTagName('li');

// const betterItems = [...items];
// betterItems.forEach((element) => {
//   console.log(element);
// });

// console.log(items);
// console.log(betterItems);

//By class name
// const listItems = document.getElementsByClassName('special');
// listItems[2].style.color = 'blue';
// console.log(listItems);

//the one who we have to use due its facilities

const result = document.querySelector('#result');
result.style.backgroundColor = 'red';

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.special');

list.forEach((element) => {
  console.log(element);
  element.style.color = 'blue';
});
