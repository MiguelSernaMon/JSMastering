//submit event listener
//prevent default
//how to get a value

const form = document.getElementById('form');
const names = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('form Submitted');
  console.log(names.value);
  console.log(password.value);
});
