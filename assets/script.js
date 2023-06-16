const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variable
const bannerImg = document.querySelector(".banner-img");
const txtImg = document.querySelector("p");
const dotImg = document.querySelectorAll(".dot");

// structure: 1:element html  2:ecoute  3:type click   4:function a executer

document.querySelector(".arrow_right").addEventListener("click", next);
let index = 0;
function next() {
  if (index < slides.length - 1) {
    index = index + 1;
  } else {
    index = 0;
  }
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  txtImg.innerHTML = slides[index].tagLine;
}


document.querySelector(".arrow_left").addEventListener("click", previous);
function previous() {
  if (index < slides.length - 1) {
    index = index + 1;
  } else {
    index = 0;
  }
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  txtImg.innerHTML = slides[index].tagLine;
}

// DOTS
dotImg.forEach((dotImg, i) => {
  dotImg.dataset.order = i;
  dotImg.addEventListener("click", dotSelected);
});
function dotSelected(e) {
  const clickedDot = e.target;
  const previousClickedDot = document.querySelector(".dot_selected");
  if (previousClickedDot) {
    previousClickedDot.classList.remove("dot_selected");
  }
  clickedDot.classList.add("dot_selected");

  bannerImg.src = "./assets/images/slideshow/" + slides[e.target.dataset.order].image;
  txtImg.innerHTML = slides[e.target.dataset.order].tagLine;
}
