const apikey = "12357f9b3b4a4c6b90c181353260301";

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const div = document.querySelector(".div");

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    
    const city = input.value;


fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`)
     .then((res) => res.json())
     .then((res) => {
        console.log(res)
        div.innerHTML = `<h2>${res.location.name}, ${res.location.country}</h2>
        <h2>Temperature: ${res.current.temp_c}</h2>`
    })
    .catch((err) => {
        console.log(err);
        
    })
});