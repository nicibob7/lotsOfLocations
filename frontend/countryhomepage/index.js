const url = "/weather"; 
const apiKey = process.env.API_KEY;
const query = 'Montevideo';
const fetch = import('node-fetch');


async function getWeather() {
    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        console.log("Error fetching weather data:", err);
        throw err
    }
}

async function displayWeather() {
    const weatherSection = document.querySelector("#weatherSection");
    const weatherData = await getWeather();

    if (weatherData) {
        const country = weatherData.location.country;
        const location = weatherData.location.name;
        const temperature = weatherData.current.temperature;
        const weatherDescription = weatherData.current.weather_descriptions[0].toLowerCase();
        const weatherIcon = weatherData.current.weather_icons[0];
        const localTime = weatherData.location.localtime;

        // Create elements
        const weatherInfoParagraph = document.createElement("p");
        const weatherIconImage = document.createElement("img");
        const timeInfoParagraph = document.createElement("p");

        // Set text content and attributes
        weatherInfoParagraph.textContent = `The current temperature in ${location}, ${country} is ${temperature}℃, and the weather is ${weatherDescription}!`;
       timeInfoParagraph.textContent = `The local time in  ${location} is ${localTime}.`

        weatherIconImage.src = weatherIcon;
        weatherIconImage.alt = "Weather Icon";

        // Clear existing content
        while (weatherSection.firstChild) {
            weatherSection.removeChild(weatherSection.firstChild);
        }

        // Append new elements to the weatherSection
        
        weatherSection.appendChild(weatherInfoParagraph);
        weatherSection.appendChild(weatherIconImage);
        weatherSection.appendChild(timeInfoParagraph);
    } else {
        weatherSection.textContent = "Failed to fetch display weather data.";
    }
}

displayWeather();
