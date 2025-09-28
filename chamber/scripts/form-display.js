document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const fields = ["firstName", "lastName", "email", "phone", "organization"];

  // Populate basic fields
  fields.forEach(field => {
    const el = document.getElementById(field);
    if (el) {
      el.textContent = params.get(field) || "Not provided";
    }
  });

  // Format and display timestamp separately
  const rawTimestamp = params.get("timestamp");
  const timestampEl = document.getElementById("timestamp");

  if (timestampEl) {
    if (rawTimestamp) {
      const date = new Date(rawTimestamp);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZoneName: "short"
      };
      timestampEl.textContent = date.toLocaleString("en-US", options);
    } else {
      timestampEl.textContent = "Not provided";
    }
  }
});
