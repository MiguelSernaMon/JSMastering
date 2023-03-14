// Web storage API - provided by browser
// Session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');

localStorage.setItem('name', 'john');
localStorage.setItem('friend', 'anna');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street 123');

const nombre = localStorage.getItem('name');
console.log(nombre);

localStorage.removeItem('name');
const anotherName = localStorage.getItem('name');
console.log(anotherName);
localStorage.clear();
