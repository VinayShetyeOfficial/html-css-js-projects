let popup = document.getElementById("popup");

function openPopup() {
    setTimeout(() => {
        popup.classList.add("open-popup");
    }, 800)
}

function closePopup() {
    popup.classList.remove("open-popup");
}