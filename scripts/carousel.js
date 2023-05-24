let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let imageCarousel = document.getElementById("image-carousel");
let indexs = document.getElementsByClassName("index");

let index = 0;
let minIndex = 0;
let maxIndex = 2;

arrowLeft.addEventListener("click", function (e) {
  index--;
  if (index < minIndex) {
    index = maxIndex;
  }
  updateBackground();
});

arrowRight.addEventListener("click", function (e) {
  index++;
  if (index > maxIndex) {
    index = minIndex;
  }
  updateBackground();
});

function updateBackground() {
  imageCarousel.style.backgroundImage = `url(../assets/musc_${index}.png)`;

  for (let i = 0; i < indexs.length; i++) {
    if (indexs[i].classList[1].toString() == `index-${index}`) {
      indexs[i].style.backgroundColor = "var(--gray)";
    } else {
      indexs[i].style.backgroundColor = "var(--light-gray)";
    }
  }
}
