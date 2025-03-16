function displayTemperature(response) {
  let thisCity = document.querySelector("#present-city");
  thisCity.innerHTML = response.data.city;
  let displayTemp = document.querySelector("#present-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  displayTemp.innerHTML = temperature;
  let icon = document.querySelector("#present-temperature-icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" id="present-temperature-icon"/>`;
  let conditions = document.querySelector("#present-conditions");
  conditions.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#present-humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let wind = document.querySelector("#present-wind");
  wind.innerHTML = `${response.data.wind.speed} km/h`;
}

function search(event) {
  event.preventDefault();
  let presentCity = document.querySelector("#city-search-input");
  let city = presentCity.value;

  let apiKey = "2903bd515o84e51d2d0at09a3a53f67a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formattedDate(thisDay) {
  let date = thisDay.getDate();
  let hours = thisDay.getHours();
  let minutes = thisDay.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = weekDays[thisDay.getDay()];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[thisDay.getMonth()];

  presentDate.innerHTML = `${day} ${date} ${month} ${hours}:${minutes}`;

  return `${day}<br />${date} ${month}<br />${hours}:${minutes}`;
}

function revealMenu() {
  let menu = document.querySelector("#info-drop");
  menu.classList.toggle("reveal");
}

let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", search);

let presentDate = document.querySelector("#present-date");
let thisDay = new Date();

presentDate.innerHTML = formattedDate(thisDay);

function revealMenu() {
  let menu = document.querySelector("#info-drop");
  menu.classList.toggle("reveal");
}

let button = document.querySelector("#footer");
button.addEventListener("click", revealMenu);
