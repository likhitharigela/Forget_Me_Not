/* import React from 'react';

class LocationButton extends React.Component {
  handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  showPosition = (position) => {
    alert(
      `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.handleGetLocation}>Get Location</button>
      </div>
    );
  }
}

export default LocationButton; */


import React from 'react';

class LocationButton extends React.Component {
  handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.fetchWeather, this.showError);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };
  showPosition = (position) => {
    alert(
      `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
    );
  };
/*   fetchWeather = (position) => {
    const { latitude, longitude } = position.coords;
    const apiKey = '0f61198bd0ddcf9af105acf173863d4f'; // Replace this with your actual OpenWeatherMap API key

    // Make a fetch request to the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        // Handle the weather data
        console.log(data); // Log the weather data to the console for demonstration
        alert(`Current Weather: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        console.log('hi');
      });
}; */
fetchWeather = (position) => {
  const { latitude, longitude } = position.coords;
  const apiKey = '0f61198bd0ddcf9af105acf173863d4f'; // Replace this with your actual OpenWeatherMap API key

  // Make a fetch request to the OpenWeatherMap Forecast API
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      // Handle the weather data
      console.log(data); // Log the weather data to the console for demonstration
      
      // Accessing future weather forecasts
      const futureWeather = data.list.slice(0, 5); // Get weather forecasts for the next 5 days
      
      // Display future weather forecasts
      futureWeather.forEach(forecast => {
        console.log(`Forecast for ${forecast.dt_txt}: ${forecast.weather[0].description}, Temperature: ${forecast.main.temp}°C`);
      });
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
};


showError = (error) => {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleGetLocation}>Get Location</button>
      </div>
    );
  }
}

export default LocationButton;
 