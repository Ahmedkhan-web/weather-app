const api = "https://api.weatherapi.com/v1/current.json?key=API_KEY&q=karachi&aqi=no";
const apikey = "12357f9b3b4a4c6b90c181353260301";

const form = document.querySelector("#form");
const input = document.querySelector("#input");

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    console.log(input.value)
});

fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${input.value}&aqi=no`)
     .then((res) => res.json())
     .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err);
        
    })
