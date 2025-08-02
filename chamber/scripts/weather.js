const apiKey = "2ececfa9592136e3df2f803a0a10d7be"

const cityURL = `https://api.openweathermap.org/data/2.5/weather?lat=42.6&lon=-5.5667&appid=${apiKey}&units=metric`;

async function apiFetch() {
  try {
    const response = await fetch(cityURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
      displayForecast(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
    const htmlSection = `
                    <div class="weather-icon">
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon" class="weather-icon-image">
                    </div>
                    <div class="weather-info">
                        <b>${data.main.temp}°F</b>
                        <p>${data.weather[0].description}</p>
                        <p>High: ${data.main.temp_max}°F</p>
                        <p>Low: ${data.main.temp_min}°F</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                        <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                    </div>`;
    document.getElementById("weather").innerHTML = htmlSection;
}

function displayForecast(data) {
        const forecastSection = `                    
                <p>Today: ${data.main.temp}°F</p>
                <p>Tomorrow: ${data.main.temp_max}°F</p>
                <p>Thursday: ${data.main.temp_min}°F</p>`;
    document.getElementById("forecast").innerHTML = forecastSection;
}