
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const div = document.querySelector("#div");


let apiKey = "12357f9b3b4a4c6b90c181353260301"

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    console.log(input.value)

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}&aqi=no`)
    .then((res) => res.json())
    .then((res) =>{
        console.log(res)
    
    div.innerHTML += `<div class="box">
  <h1>${res.location.name} <em>(${res.location.country})</em></h1>
  <h2>Temperature: ${res.current.temp_c}°C</h2>
</div>`;
    })
    .catch((err) =>{
        console.log(err , "error")
        console.log("City not found")
    });
});


const cards = document.querySelectorAll(".box");
cards.forEach((card, i) => {
  card.style.animationDelay = `${i * 0.1}s`;
});

