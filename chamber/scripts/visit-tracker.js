const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysPassed = Math.floor((now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
  if (daysPassed < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else {
    visitMessage.textContent = `You last visited ${daysPassed} ${daysPassed === 1 ? "day" : "days"} ago.`;
  }
}

localStorage.setItem("lastVisit", now.toString());
