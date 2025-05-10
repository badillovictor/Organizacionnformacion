document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '4a35474747774d5aadb182624251005'; // Replace with your actual WeatherAPI.com key
    const city = 'Tampico';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const weatherDataElement = document.getElementById('weather-data');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const location = data.location.name;
            const temperature = data.current.temp_c;
            const condition = data.current.condition.text;
            const iconUrl = data.current.condition.icon;
            const humidity = data.current.humidity;
            const windKph = data.current.wind_kph;

            weatherDataElement.innerHTML = `
                <h2>${location}</h2>
                <img src="${iconUrl}" alt="${condition}" class="weather-icon">
                <p class="temperature">${temperature}°C</p>
                <p class="condition">${condition}</p>
                <p class="details">Humedad: ${humidity}%</p>
                <p class="details">Viento: ${windKph} km/h</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherDataElement.innerHTML = '<p>Failed to load weather data for Tampico.</p>';
        });
});