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
const dotImgs = document.querySelectorAll(".dot");

// structure: 1:element html  2:ecoute  3:type click   4:function a executer
// ARROW:right
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
  // // dotImgs. = + slides[e.target.dataset.order]
  // clickedDot.classList.add = + slides[index].e.target.dataset.order
}

// ARROW:right
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

// //  
// function dotSelected(e) {
//   const clickedDot = e.target
//   const previousClickedDot = document.querySelector(".dot_selected")
//   if(previousClickedDot){
//     previousClickedDot.classList.remove("dot_selected")
//   }

//   clickedDot.classList.add("dot_selected")

//   const orderIndex = parseInt(clickedDot.dataset.order, 10);
//   bannerImg.src = "./assets/images/slideshow/" + slides[orderIndex].image;
//   txtImg.innerHTML
//   }

// DOTS   andre

dotImgs.forEach((dotImg, i) => {
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

  document.getElementsByClassName("dot").className = "dote_selected";
  

  bannerImg.src = "./assets/images/slideshow/" + slides[e.target.dataset.order].image;
  txtImg.innerHTML = slides[e.target.dataset.order].tagLine;
}
