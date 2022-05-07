import fetch from 'node-fetch';

export async function getCurrentWeatherType() {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=123456678");
    const body = await response.json();

    const kelvin = body.main.temp;
    const celsius = kelvin - 273.15;
    const weatherType = celsius >= 14 ? "hot" : "cold";

    return weatherType;
}