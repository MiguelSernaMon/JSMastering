// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const button = document.querySelector('.btn');
const link = document.getElementById('link');

// heading.addEventListener('click', () => {
//   if (heading.classList.contains('title')) {
//     heading.classList.remove('title');
//   } else {
//     heading.classList.add('title');
//   }
// });
heading.addEventListener('click', function (event) {
  console.log(event.currentTarget);
  console.log(this);
  event.currentTarget.classList.add('title');
});
button.addEventListener('click', (event) => {
  console.log(event.currentTarget);
  heading.classList.remove('title');
});

function someFunc(e) {
  e.preventDefault();
}

link.addEventListener('click', someFunc);
