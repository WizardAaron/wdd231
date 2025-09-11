const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

getProphetData(url);

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthDateInfo = document.createElement('p');
    let birthPlaceInfo = document.createElement('p');
    let portrait = document.createElement('img');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDateInfo.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlaceInfo.textContent = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '170');
    portrait.setAttribute('height', '220');

    card.appendChild(fullName);
    card.appendChild(birthDateInfo);
    card.appendChild(birthPlaceInfo);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};
