const apikey = "12357f9b3b4a4c6b90c181353260301";

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const div = document.querySelector(".div");

const searchedCities = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = input.value.trim();

  if (!city) return; // ignore empty input

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`)
    .then((res) => res.json())
    .then((data) => {
      // Check if API returned an error
      if (data.error) {
        alert(data.error.message);
        return;
      }

      // Add new city
      searchedCities.push(data);

      // Clear div
      div.innerHTML = "";

      // Loop and display all cities
      searchedCities.forEach((cityData) => {
        const cityDiv = document.createElement("div");
        cityDiv.classList.add("city-card");

        cityDiv.innerHTML = `
          <h2>${cityData.location.name}, ${cityData.location.country}</h2>
          <h3>Temperature: ${cityData.current.temp_c}°C</h3>
          <p>Condition: ${cityData.current.condition.text}</p>
        `;

        div.appendChild(cityDiv);
      });

      input.value = "";
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to fetch data. Check your API key or network.");
    });
});