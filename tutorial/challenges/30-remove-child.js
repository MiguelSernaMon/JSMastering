//remove
//removeChild

const result = document.querySelector('#result');
// result.remove();
const heading = result.querySelector('h1');
console.log(heading);
// result.removeChild(heading);
result.removeChild(result.querySelector('h1'));
