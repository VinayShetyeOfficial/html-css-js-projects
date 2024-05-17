let scrollContainer = document.querySelector(".gallery");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (event) => {
    //To prevent the page's default scroll behaviour along the Y-axis
    event.preventDefault(); 

    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
})

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})

prevBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})

