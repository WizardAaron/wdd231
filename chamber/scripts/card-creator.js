const url = 'data/members.json';
const cardsContainer = document.querySelector('#cards');

async function getMemberData() {
  const response = await fetch(url);
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  members.forEach(member => {
    const card = document.createElement('section');

    const name = document.createElement('h2');
    name.textContent = member.name;

    const addressInfo = document.createElement('p');
    addressInfo.textContent = `Address: ${member.address}`;

    const phoneInfo = document.createElement('p');
    phoneInfo.textContent = `Phone: ${member.phone}`;

    const websiteLink = document.createElement('a');
    websiteLink.href = member.website;
    websiteLink.target = '_blank';
    websiteLink.textContent = 'Visit Website';

    const image = document.createElement('img');
    image.src = member.image;
    image.alt = `Logo of ${member.name}`;
    image.loading = 'lazy';
    image.width = 200;
    image.height = 200;

    card.append(name, image, addressInfo, phoneInfo, websiteLink);
    cardsContainer.appendChild(card);
  });
}

getMemberData();


