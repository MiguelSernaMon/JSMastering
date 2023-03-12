//createElement("element")
//createTextNode("text content")
//element.appendChild("childElement")
const result = document.querySelector('#result');

//create empty element

const bodyDiv = document.createElement('div');

//create textNode
const text = document.createTextNode('a simple body div');

//append de child to bodyDiv
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

console.log(result.children);

//using result to add a h1 children

const heading = document.createElement('h2');
const text2 = document.createTextNode('this is the second child son');
heading.appendChild(text2);
heading.classList.add('blue');
result.appendChild(heading);
