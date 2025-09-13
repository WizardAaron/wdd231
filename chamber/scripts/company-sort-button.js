const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const cardsContainerEl = document.querySelector('#cards');

gridButton.addEventListener('click', () => {
  cardsContainerEl.classList.add('grid');
  cardsContainerEl.classList.remove('list');
});

listButton.addEventListener('click', () => {
  cardsContainerEl.classList.add('list');
  cardsContainerEl.classList.remove('grid');
});
