// click - fires after full action occurs
// mousedown - button is pressed
// mousedown - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  console.log('u click mee');
});
btn.addEventListener('mousedown', () => {
  console.log('down');
});
btn.addEventListener('mouseup', () => {
  console.log('up');
});

heading.addEventListener('mouseenter', () => {
  heading.classList.add('title');
});

heading.addEventListener('mouseleave', () => {
  heading.classList.remove('title');
});
