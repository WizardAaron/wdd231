const url = 'data/members.json';
const cardsContainer = document.querySelector('#cards');

async function getMemberData() {
  try {
    const response = await fetch(url);
    const members = await response.json();

    // Filters members with membership_level 2 or 3
    const eligibleMembers = members.filter(member =>
      member.membership_level === 2 || member.membership_level === 3
    );

    // Shuffles the eligible members
    const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

    // Select the first 3 from the shuffled array
    const spotlightMembers = shuffled.slice(0, 3);

    displayMembers(spotlightMembers);
  } catch (error) {
    console.error('Error fetching member data:', error);
  }
}

function displayMembers(members) {
  members.forEach(member => {
    const card = document.createElement('section');

    const name = document.createElement('h2');
    name.textContent = member.name;

    const wrapper = document.createElement('div');
    wrapper.classList.add('card-content-wrapper');

    const image = document.createElement('img');
    image.src = member.image;
    image.alt = `Logo of ${member.name}`;
    image.loading = 'lazy';

    const textContent = document.createElement('div');
    textContent.classList.add('text-content');

    const addressInfo = document.createElement('p');
    addressInfo.textContent = `Address: ${member.address}`;

    const phoneInfo = document.createElement('p');
    phoneInfo.textContent = `Phone: ${member.phone}`;

    const websiteLink = document.createElement('a');
    websiteLink.href = member.website;
    websiteLink.target = '_blank';
    websiteLink.textContent = 'Visit Website';

    textContent.append(addressInfo, phoneInfo, websiteLink);
    wrapper.append(image, textContent);
    card.append(name, wrapper);
    cardsContainer.appendChild(card);
  });
}


getMemberData();
