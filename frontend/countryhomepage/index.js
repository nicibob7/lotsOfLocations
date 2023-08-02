
const url = "https://lots-of-locations-lol.onrender.com/weather"; // Replace with your backend API URL

async function getWeather() {
    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        console.log("Error fetching weather data:", err);
        return null;
    }
}

async function displayWeather() {
    const weatherSection = document.querySelector("#weatherSection");
    const weatherData = await getWeather();

    if (weatherData) {
        const location = weatherData.location.name;
        const temperature = weatherData.current.temperature;
        const weatherDescription = weatherData.current.weather_descriptions[0];
        const weatherIcon = weatherData.current.weather_icons[0];

        // Create elements
        const weatherInfoParagraph = document.createElement("p");
        const weatherIconImage = document.createElement("img");

        // Set text content and attributes
        weatherInfoParagraph.textContent = `The current temperature in ${location} is ${temperature}℃, and the weather is ${weatherDescription}.`;
        weatherIconImage.src = weatherIcon;
        weatherIconImage.alt = "Weather Icon";

        // Clear existing content
        while (weatherSection.firstChild) {
            weatherSection.removeChild(weatherSection.firstChild);
        }

        // Append new elements to the weatherSection
        
        weatherSection.appendChild(weatherInfoParagraph);
        weatherSection.appendChild(weatherIconImage);
    } else {
        weatherSection.textContent = "Failed to fetch weather data.";
    }
}

displayWeather();
