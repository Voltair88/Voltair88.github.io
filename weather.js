const key = "af9c50b442a83a45238a1f739f6d219c";
let city = "stockholm";

function weather() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    key;

  fetch(url)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      drawWeather(data);
    })
    .catch(function () {
      console.log("error");
    });

  document.getElementById("search").addEventListener("click", function () {
    city = document.getElementById("city").value;
    weather();
  });
}

function drawWeather(d) {
  const celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  const icon = d.weather[0].icon;
  document.getElementById("description").innerHTML = d.weather[0].description;
  document.getElementById("temp").innerHTML = celcius + "&deg;";
  document.getElementById("location").innerHTML = d.name;
  document.getElementById("icon").src =
    "http://openweathermap.org/img/w/" + icon + ".png";
}

window.onload = function () {
  weather();
  currentIndex = localStorage.getItem("currentIndex");
  currentIndex = Number(currentIndex);
  displaySlides(currentIndex);
};

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

  window.onunload = function () {
    localStorage.setItem("currentIndex", currentIndex);
  };
}
