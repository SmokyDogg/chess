let offset = 0;
let counter = 3;
const cardsLine = document.querySelector(".cards-line");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
const text = document.querySelector(".counter");

const nextButtonPlate = document.querySelector(".plate-button-next");
const prevButtonPlate = document.querySelector(".plate-button-prev");
const dot = document.querySelectorAll(".dot");
const plates = document.querySelector(".plates");

prevButton.disabled = true;

const scrollNext = function () {
  offset = offset + 414;
  counter++;
  cardsLine.style.left = -offset + "px";
  if (offset > 1240) {
    nextButton.disabled = true;
  } else if (offset > 394) {
    prevButton.disabled = false;
  }
  text.innerText = counter;
};

nextButton.addEventListener("click", scrollNext);

const scrollPrev = function () {
  offset = offset - 414;
  counter--;
  if (offset < 1240) {
    nextButton.disabled = false;
  }
  if (offset < 1) {
    prevButton.disabled = true;
  }
  cardsLine.style.left = -offset + "px";
  text.innerText = counter;
};

prevButton.addEventListener("click", scrollPrev);

let sliderTimerNext = setInterval(scrollNext, 4000);
setInterval(() => {
  clearInterval(sliderTimerNext);
}, 12000);

const scrollNextPlates = function () {
  offset = offset + 355;
  plates.style.left = -offset + "px";
  if (offset > 1400) {
    nextButtonPlate.disabled = true;
  } else if (offset > 356) {
    prevButtonPlate.disabled = false;
  }
  console.log(offset);
};

const scrollPrevPlates = function () {
  offset = offset - 355;
  if (offset < 1) {
    prevButtonPlate.disabled = true;
  } else if (offset < 1755) {
    prevButtonPlate.disabled = false;
  }
  plates.style.left = -offset + "px";
  console.log(offset);
};

nextButtonPlate.addEventListener("click", scrollNextPlates);
prevButtonPlate.addEventListener("click", scrollPrevPlates);
