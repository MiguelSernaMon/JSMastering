//createElement("element")
//createTextNode("text content")
//element.appendChild("childElement")

//replaceChild("new", "old")

const result = document.querySelector('#result');
const first = document.querySelector('.red');
//create empty element

const bodyDiv = document.createElement('div');

//create textNode
const text = document.createTextNode('a simple body div');

//append de child to bodyDiv
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);

console.log(result.children);

//using result to add a h1 children

const heading = document.createElement('h2');
const text2 = document.createTextNode('this is the second child son');
heading.appendChild(text2);
heading.classList.add('blue');
console.log(first);
console.log(heading);
result.insertBefore(heading, first);

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`I'm small heading text`);
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);
