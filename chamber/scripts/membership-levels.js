const membershipCardsContainer = document.querySelector('.membership-cards');
const modals = {
  "Non-Profit": {
    title: 'Non-Profit Membership Benefits',
    benefits: [
      'Free membership for nonprofits',
      'Access to community events',
      'Basic directory listing'
    ]
  },
  Bronze: {
    title: 'Bronze Membership Benefits',
    benefits: [
      'Event discounts',
      'Training sessions',
      'Enhanced directory listing'
    ]
  },
  Silver: {
    title: 'Silver Membership Benefits',
    benefits: [
      'Advertising opportunities',
      'Spotlight positions',
      'Priority event access'
    ]
  },
  Gold: {
    title: 'Gold Membership Benefits',
    benefits: [
      'All Silver benefits',
      'Exclusive networking events',
      'Premium advertising placement'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Create membership cards dynamically
  Object.entries(modals).forEach(([level, data]) => {
    const card = document.createElement('div');
    card.classList.add('membership-card');

    const heading = document.createElement('h2');
    heading.textContent = `${level}\nMembership`;
    heading.style.whiteSpace = "pre-line";

    const link = document.createElement('a');
    link.textContent = 'View Benefits';
    link.href = '#';
    link.setAttribute('data-level', level);
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showModal(level);
    });

    card.appendChild(heading);
    card.appendChild(link);
    membershipCardsContainer.appendChild(card);
  });

  // Create modals dynamically
  Object.entries(modals).forEach(([level, data]) => {
    const modal = document.createElement('dialog');
    modal.classList.add('modal');
    modal.id = `${level.toLowerCase()}Modal`;

    const content = document.createElement('div');
    content.classList.add('modal-content');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-modal');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => modal.close());

    const title = document.createElement('h3');
    title.textContent = data.title;

    const list = document.createElement('ul');
    data.benefits.forEach(benefit => {
      const li = document.createElement('li');
      li.textContent = benefit;
      list.appendChild(li);
    });

    content.append(closeBtn, title, list);
    modal.appendChild(content);
    document.body.appendChild(modal);

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.close();
    });
  });
});

function showModal(level) {
  const modal = document.getElementById(`${level.toLowerCase()}Modal`);
  if (modal && typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    console.error("Modal not found or showModal not supported.");
  }
}
