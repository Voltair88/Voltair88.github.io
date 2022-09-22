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
};
