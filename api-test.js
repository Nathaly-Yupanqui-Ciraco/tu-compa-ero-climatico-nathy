const claveApi = "01195b7eabea47e1a12202036250403";

const idioma = "es";
const ciudad = "Huancayo";

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const response = await fetch(apiClimaActual);
let data = await response.json();

console.log(data.current.condition);