import React from 'react';

class LocationButton extends React.Component {
  state = {
    currentWeather: null,
    forecastData: null,
    error: null
  };

  handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.fetchWeather, this.showError);
    } else {
      this.setState({ error: 'Geolocation is not supported by this browser.' });
    }
  };

  fetchWeather = (position) => {
    const { latitude, longitude } = position.coords;
    const apiKey = '0f61198bd0ddcf9af105acf173863d4f'; // Replace this with your actual OpenWeatherMap API key

    // Make a fetch request to the OpenWeatherMap Current Weather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        // Handle the current weather data
        console.log(data); // Log the current weather data to the console for demonstration
        alert(`Current Weather: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`);
        this.setState({ currentWeather: data });
      })
      .catch(error => {
        console.error('Error fetching current weather data:', error);
        this.setState({ error: 'Error fetching current weather data. Please try again later.' });
      });

    // Make a fetch request to the OpenWeatherMap Forecast API
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        // Handle the forecast data
        console.log(data); // Log the forecast data to the console for demonstration

        // Accessing future weather forecasts
        const futureWeather = data.list.slice(0, 5); // Get weather forecasts for the next 5 days

        // Set the forecast data to the component state
        this.setState({ forecastData: futureWeather, error: null });
      })
      .catch(error => {
        console.error('Error fetching forecast data:', error);
        this.setState({ error: 'Error fetching forecast data. Please try again later.' });
      });
  };

  showError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        this.setState({ error: "User denied the request for Geolocation." });
        break;
      case error.POSITION_UNAVAILABLE:
        this.setState({ error: "Location information is unavailable." });
        break;
      case error.TIMEOUT:
        this.setState({ error: "The request to get user location timed out." });
        break;
      case error.UNKNOWN_ERROR:
        this.setState({ error: "An unknown error occurred." });
        break;
      default:
        this.setState({ error: "An unknown error occurred." });
    }
  };

  render() {
    const { currentWeather, forecastData, error } = this.state;

    return (
      <div>
        <button onClick={this.handleGetLocation}>Get Location</button>
        {error && <p>{error}</p>}
        {forecastData && (
          <div>
            <h2>5-Day Weather Forecast</h2>
            <ul>
              {forecastData.map((forecast, index) => (
                <li key={index}>
                  {forecast.dt_txt}: {forecast.weather[0].description}, Temperature: {forecast.main.temp}°C
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default LocationButton;
