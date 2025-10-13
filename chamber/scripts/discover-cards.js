const container = document.getElementById("discover-cards");

const modal = document.getElementById("locationModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalAddress = document.getElementById("modalAddress");
const modalCost = document.getElementById("modalCost");
const modalDescription = document.getElementById("modalDescription");

fetch("data/discover.json")
  .then(response => response.json())
  .then(items => {
    items.forEach((item, index) => {
      const card = document.createElement("section");
      card.className = "discover-card";
      card.style.gridArea = `item${index + 1}`;

      const title = document.createElement("h2");
      title.textContent = item.name;

      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.width = 300;
      img.height = 200;
      figure.appendChild(img);

      const content = document.createElement("div");
      content.className = "card-content";

      const address = document.createElement("address");
      address.textContent = item.address;

      const desc = document.createElement("p");
      desc.textContent = item.description;

      const button = document.createElement("button");
      button.textContent = "Learn More";
      button.addEventListener("click", () => {
        modalTitle.textContent = item.name;
        modalAddress.textContent = item.address;
        modalCost.textContent = item.cost;
        modalDescription.textContent = item.description;
        modal.showModal();
      });

      content.append(address, desc, button);
      card.append(title, figure, content);
      container.appendChild(card);
    });
  });

closeModal.addEventListener("click", () => {
  modal.close();
});
