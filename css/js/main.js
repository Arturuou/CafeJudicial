// Modal agenda
const btnAgendar = document.getElementById("btn-agendar");
const modalAgenda = document.getElementById("modal-agenda");
const closeModal = document.querySelector(".close-modal");

btnAgendar.addEventListener("click", () => {
    modalAgenda.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modalAgenda.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modalAgenda) {
        modalAgenda.style.display = "none";
    }
});
