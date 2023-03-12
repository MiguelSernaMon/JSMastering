// nodeValue
// textContent

const item = document.getElementById('special');
const value = item.nodeValue;
// console.log(item.childNodes[0].nodeValue);
console.log(item.firstChild.nodeValue);
const easyValue = item.textContent;

console.log(easyValue);
