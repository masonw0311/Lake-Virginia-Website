// script.js
const apiKey = "8474db2bb55ec9adf39845dc0a45ede3"; 
const city = "Winter Park";
const state = "FL";
const units = "imperial"; // For Fahrenheit

// API endpoint for current weather (no forecast)
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&units=${units}&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        
        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Extracting relevant data
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const icon = data.weather[0].icon;
        

        // Update the DOM elements
        document.getElementById("temperature").textContent = `Temperature: ${temperature}°F`;
        document.getElementById("description").textContent = `Weather: ${weatherDescription}`;
        
        // Displaying weather icon
        const iconImg = document.getElementById("weather-icon");
        iconImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        iconImg.alt = weatherDescription;
        iconImg.style.display = "inline"; // Make the icon visible

    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("temperature").textContent = "Error loading data";
        document.getElementById("description").textContent = "Error loading data";
    }
}

// Call the function when the page loads
getWeather();