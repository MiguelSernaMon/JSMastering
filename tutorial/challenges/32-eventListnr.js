// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');

function changeColors() {
  let hasClass = h1.classList.contains('title');
  if (hasClass) {
    h1.classList.remove('title');
  } else {
    h1.classList.add('title');
  }
}

btn.addEventListener('click', changeColors);
