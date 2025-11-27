const accButtons = document.querySelectorAll(".accordion-button");

accButtons.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
