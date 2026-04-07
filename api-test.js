const claveApi = "358bb33e61c64b499b352348260704";

const idioma = "es";
const ciudad = "Huancayo";

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

fetch(apiClimaActual)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });