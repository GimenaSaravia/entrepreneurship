document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const cards = document.querySelectorAll("#cards .col");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector(".card-title").textContent.toLowerCase();
            const text = card.querySelector(".card-text").textContent.toLowerCase();

            if (title.includes(query) || text.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


