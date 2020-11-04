const modalLink = document.querySelector(".write-us-button");
const modalPopup = document.querySelector(".modal-contact");
const modalClose = modalPopup.querySelector(".modal-close");

modalLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal-show");
});

modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-show");
});