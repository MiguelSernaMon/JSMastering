//keypress - when key is pressed
//keydown - when key is down
// keyup - when key is released

const nameInput = document.querySelector('#name');

// nameInput.addEventListener('keypress', () => {
//   console.log('u press a key');
// });

// nameInput.addEventListener('keydown', () => {
//   console.log('u press a key');
// });
nameInput.addEventListener('keyup', () => {
  console.log(nameInput.value);
});
