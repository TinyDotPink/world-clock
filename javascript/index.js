// Los Angeles
setInterval(function () {
  let laBox = document.querySelector("#losangeles");

  let losangelesTime = moment().tz("America/Los_Angeles");
  let laDateBox = laBox.querySelector(".date");
  laDateBox.innerHTML = losangelesTime.format("MMMM Do yyyy");
  let laTimeBox = laBox.querySelector(".time");
  laTimeBox.innerHTML = `${losangelesTime.format(
    "hh:mm:ss"
  )} <small>${losangelesTime.format("A")}</small>`;
}, 1000);

// Tokyo
setInterval(function () {
  let tokyoBox = document.querySelector("#tokyo");

  let tokyoTime = moment().tz("Asia/Tokyo");
  let tokyoDateBox = tokyoBox.querySelector(".date");
  tokyoDateBox.innerHTML = tokyoTime.format("MMMM Do yyyy");
  let tokyoTimeBox = tokyoBox.querySelector(".time");
  tokyoTimeBox.innerHTML = `${tokyoTime.format(
    "hh:mm:ss"
  )} <small>${tokyoTime.format("A")}</small>`;
}, 1000);

// Paris
setInterval(function () {
  let parisBox = document.querySelector("#paris");

  parisTime = moment().tz("Europe/Paris");
  let parisDateBox = parisBox.querySelector(".date");
  parisDateBox.innerHTML = parisTime.format("MMMM Do yyyy");
  let parisTimeBox = parisBox.querySelector(".time");
  parisTimeBox.innerHTML = `${parisTime.format(
    "hh:mm:ss"
  )} <small>${parisTime.format("A")}</small>`;
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(cityTimeZone);
  let cityBox = document.querySelector("#cities");
  cityBox.innerHTML += `

  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do yyyy")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>

  `;
}

let citesSelect = document.querySelector("#city");
citesSelect.addEventListener("change", updateCity);
