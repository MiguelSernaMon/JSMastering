// allow select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
  console.log('current target', e.currentTarget);
  console.log('target', e.target);

  if (e.target.classList.contains('link')) {
    console.log('you clicked on the link');
  }
}

function stopPropagation(e) {
  console.log('u clicked on list :D');
  e.stopPropagation();
}
list.addEventListener('click', showBubbling);
container.addEventListener('click', showBubbling);
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });

//so de bubbling its de default propagation of events who are triggered from child to parent, when I use capture as true it will execute the events from father to child.

//stop propagation method will stop the execution of events from another elements.
