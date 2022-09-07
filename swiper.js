let currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
  displaySlides((currentIndex += num));
}

function displaySlides(num) {
  let x;
  let slides = document.getElementsByClassName("card");
  if (num > slides.length) {
    currentIndex = 1;
  }
  if (num < 1) {
    currentIndex = slides.length;
  }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "flex";
  window.onload = function () {
    currentIndex = localStorage.getItem("currentIndex");
    currentIndex = Number(currentIndex);
    displaySlides(currentIndex);
  };
  window.onunload = function () {
    localStorage.setItem("currentIndex", currentIndex);
  };
}
