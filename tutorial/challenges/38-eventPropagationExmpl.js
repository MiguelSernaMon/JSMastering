const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', function () {
  const heading = document.createElement('h1');
  heading.textContent = "I'm withing a container";
  heading.classList.add('heading');
  container.appendChild(heading);
});

container.addEventListener('click', function (event) {
  if (event.target.classList.contains('heading')) {
    console.log(event.target);
  }
});
