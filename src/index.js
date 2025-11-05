const slidesContainer = document.querySelector(".slides");


const slideBtnPrev = document.getElementById("slide-btn-prev");
const slideBtnNext = document.getElementById("slide-btn-next");

const scrollAmount = slidesContainer.offsetWidth * 0.8;



// Add event listeners for buttons
slideBtnPrev.addEventListener("click", () => {
  slidesContainer.scrollBy({
    left: -scrollAmount,
    behavior:"smooth",
 })
});
slideBtnNext.addEventListener("click", () => {
  slidesContainer.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  })
});



