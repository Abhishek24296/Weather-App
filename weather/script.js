// Function to fetch weather data based on the entered city
async function getWeather() {
    // API key for OpenWeatherMap
    const apiKey = '802101dc847b492d05b1cad58e048f1d';
    // Get the city name from the input field
    const city = document.getElementById('cityInput').value;
    // Construct the API URL with the city name and API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        // Fetch weather data from the API
        const response = await fetch(apiUrl);
        // Convert response to JSON format
        const data = await response.json();

        // Check if the API request was successful
        if (data.cod === 200) {
            // Display the weather information
            displayWeather(data);
        } else {
            // Show error message for invalid city name
            showError('Invalid city name');
        }
    } catch (error) {
        // Show error message for any other issues
        showError('An error occurred while fetching data');
    }
}

// Function to display weather information on the webpage
function displayWeather(data) {
    // Get the weatherInfo container element
    const weatherInfo = document.getElementById('weatherInfo');
    // Populate the container with weather data
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Description: ${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
    `;
}

// Function to display error messages
function showError(message) {
    // Get the weatherInfo container element
    const weatherInfo = document.getElementById('weatherInfo');
    // Display the error message
    weatherInfo.innerHTML = `<p>${message}</p>`;
}
