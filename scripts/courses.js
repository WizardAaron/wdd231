document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".course-filters button");
    const items = document.querySelectorAll(".course-item");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");
            items.forEach(item => {
                if (filter === "all") {
                    item.style.display = "";
                } else if (item.classList.contains(filter)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});