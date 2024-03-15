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


// import React from 'react';

// class LocationButton extends React.Component {
//   handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(this.fetchWeather, this.showError);
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   };
//   showPosition = (position) => {
//     alert(
//       `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
//     );
//   };
//   fetchWeather = (position) => {
//     const { latitude, longitude } = position.coords;
//     const apiKey = '0f61198bd0ddcf9af105acf173863d4f'; // Replace this with your actual OpenWeatherMap API key

//     // Make a fetch request to the OpenWeatherMap API
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
//       .then(response => response.json())
//       .then(data => {
//         // Handle the weather data
//         console.log(data); // Log the weather data to the console for demonstration
//         alert(`Current Weather: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`);
//       })
//       .catch(error => {
//         console.error('Error fetching weather data:', error);
//         console.log('hi');
//       });
// };


// showError = (error) => {
//   switch(error.code) {
//     case error.PERMISSION_DENIED:
//       alert("User denied the request for Geolocation.");
//       break;
//       case error.POSITION_UNAVAILABLE:
//         alert("Location information is unavailable.");
//         break;
//       case error.TIMEOUT:
//         alert("The request to get user location timed out.");
//         break;
//       case error.UNKNOWN_ERROR:
//         alert("An unknown error occurred.");
//         break;
//       default:
//         alert("An unknown error occurred.");
//     }
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleGetLocation}>Get Location</button>
//       </div>
//     );
//   }
// }

// export default LocationButton;
 


import React from 'react';
import './styles.css';

class LocationButton extends React.Component {
  state = {
    locationInput: ''
  };

  handleLocationChange = (event) => {
    this.setState({ locationInput: event.target.value });
  };

  handleGetWeather = (location) => {
    const apiKey = '0f61198bd0ddcf9af105acf173863d4f'; // Replace this with your actual OpenWeatherMap API key

    // Make a fetch request to the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Location not found.');
        }
        return response.json();
      })
      .then(data => {
        // Handle the weather data
        console.log(data); // Log the weather data to the console for demonstration
        alert(`Current Weather in ${location}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please check the location and try again.');
      });
  };

  handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          this.fetchWeatherByCoords(latitude, longitude);
        },
        error => {
          console.error('Error getting current location:', error);
          alert('Error getting current location. Please try again or enter a location manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  fetchWeatherByCoords = (latitude, longitude) => {
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
        alert('Error fetching weather data. Please try again.');
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleGetLocation}>Use Current Location</button>
        <br />
        <input
          type="text"
          placeholder="Enter location"
          value={this.state.locationInput}
          onChange={this.handleLocationChange}
        />
        <button onClick={() => this.handleGetWeather(this.state.locationInput)}>Get Weather</button>
      </div>
    );
  }
}

export default LocationButton;
