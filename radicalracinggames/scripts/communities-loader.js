document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("community-cards");

  fetch("data/communities.json")
    .then((response) => response.json())
    .then((communities) => {
      communities.forEach((community) => {
        const card = document.createElement("section");
        card.className = "community-card";

        // Background overlay
        const bgOverlay = document.createElement("div");
        bgOverlay.className = "card-bg-overlay";
        bgOverlay.style.backgroundImage = `url(${community.background})`;
        card.appendChild(bgOverlay);

        // Content container
        const content = document.createElement("div");
        content.className = "card-content";

        const title = document.createElement("h3");
        title.textContent = community.name;

        const description = document.createElement("p");
        description.textContent = community.description;

        const platforms = document.createElement("p");
        platforms.className = "platform-tags";
        platforms.textContent = `Platform: ${community.platforms.join(", ")}`;

        const link = document.createElement("a");
        link.href = community.link;
        link.target = "_blank";
        link.className = "join-button";
        link.textContent = "Join Community";

        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(platforms);
        content.appendChild(link);
        card.appendChild(content);
        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Failed to load communities:", err);
    });
});
