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
//       .ccdatch(error => {
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
 


// import React from 'react';
// import './styles.css';

// class LocationButton extends React.Component {
//   state = {
//     locationInput: ''
//   };

//   handleLocationChange = (event) => {
//     this.setState({ locationInput: event.target.value });
//   };

//   handleGetWeather = (location) => {
//     const apiKey = '0f61198bd0ddcf9af105acf173863d4f'; // Replace this with your actual OpenWeatherMap API key

//     // Make a fetch request to the OpenWeatherMap API
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Location not found.');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Handle the weather data
//         console.log(data); // Log the weather data to the console for demonstration
//         alert(`Current Weather in ${location}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`);
//       })
//       .catch(error => {
//         console.error('Error fetching weather data:', error);
//         alert('Error fetching weather data. Please check the location and try again.');
//       });
//   };

//   handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         position => {
//           const { latitude, longitude } = position.coords;
//           this.fetchWeatherByCoords(latitude, longitude);
//         },
//         error => {
//           console.error('Error getting current location:', error);
//           alert('Error getting current location. Please try again or enter a location manually.');
//         }
//       );
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   };

//   fetchWeatherByCoords = (latitude, longitude) => {
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
//         alert('Error fetching weather data. Please try again.');
//       });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleGetLocation}>Use Current Location</button>
//         <br />
//         <input
//           type="text"
//           placeholder="Enter location"
//           value={this.state.locationInput}
//           onChange={this.handleLocationChange}
//         />
//         <button onClick={() => this.handleGetWeather(this.state.locationInput)}>Get Weather</button>
//       </div>
//     );
//   }
// }

// export default LocationButton;


// import React from 'react';
// import './styles.css';

// class LocationButton extends React.Component {
//   state = {
//     locationInput: '',
//     soilType: '',
//     crops: []
//   };

//   handleLocationChange = (event) => {
//     this.setState({ locationInput: event.target.value });
//   };

//   handleSoilChange = (event) => {
//     this.setState({ soilType: event.target.value });
//   };

//   handleGetWeather = (location) => {
//     const apiKey = '0f61198bd0ddcf9af105acf173863d4f'; // Replace this with your actual OpenWeatherMap API key

//     // Make a fetch request to the OpenWeatherMap API
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Location not found.');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Handle the weather data
//         console.log(data); // Log the weather data to the console for demonstration
//         alert(`Current Weather in ${location}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`);
//       })
//       .catch(error => {
//         console.error('Error fetching weather data:', error);
//         alert('Error fetching weather data. Please check the location and try again.');
//       });
//   };

//   fetchCropsByLocationAndSoil = (location, soilType) => {
//     // Assuming you have the crops.csv and state.csv data available

//     // Fetch crops data based on location and soil type
//     // Here you can use some logic to find the appropriate crops
//     // from the data available in crops.csv and state.csv
//     // For demonstration, let's assume you have the crops data available as an array
//     // You can replace this with actual fetching and filtering logic based on your data structure

//     // Example crops data
//     const cropsData = [
//       { crop: 'Rice', temperature: '22-32', soil: 'Deep clayey' },
//       { crop: 'Wheat', temperature: '10-15', soil: 'Well-drained' },
//       { crop: 'Millets', temperature: '27-32', soil: 'Alluvial' },
//       { crop: 'Grams', temperature: '20-25', soil: 'Loamy Soil' },
//       { crop: 'Sugar Cane', temperature: '21-27', soil: 'Deep rich loamy soil' },
//       { crop: 'Cotton', temperature: '21-30', soil: 'Black soil' },
//       { crop: 'Oilseeds', temperature: '20-30', soil: 'Red soil' },
//       { crop: 'Tea', temperature: '20-30', soil: 'Well drained' },
//       { crop: 'Coffee', temperature: '15-28', soil: 'Well drained' },
//       { crop: 'Maize', temperature: '18-30', soil: 'Well-drained loamy soil' },
//       { crop: 'Barley', temperature: '10-20', soil: 'Well-drained loamy soil' },
//       { crop: 'Potato', temperature: '15-20', soil: 'Sandy loam' },
//       { crop: 'Tomato', temperature: '15-30', soil: 'Well-drained loamy soil' },
//       { crop: 'Onion', temperature: '10-25', soil: 'Sandy loam' },
//       { crop: 'Carrot', temperature: '10-20', soil: 'Sandy loam' }
//     ];
    

//     // Filter crops based on soil type
//     const filteredCrops = cropsData.filter(crop => crop.soil.toLowerCase() === soilType.toLowerCase());

//     this.setState({ crops: filteredCrops });
//   };

//   handleGetCrops = () => {
//     const { locationInput, soilType } = this.state;
//     if (locationInput && soilType) {
//       // Fetch crops based on location and soil type
//       this.fetchCropsByLocationAndSoil(locationInput, soilType);
//     } else {
//       alert('Please enter both location and soil type.');
//     }
//   };

//   render() {
//     const { crops } = this.state;

//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Enter location"
//           value={this.state.locationInput}
//           onChange={this.handleLocationChange}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Enter soil type"
//           value={this.state.soilType}
//           onChange={this.handleSoilChange}
//         />
//         <br />
//         <button onClick={this.handleGetCrops}>Get Crops</button>

//         <div>
//           {crops.length > 0 && (
//             <div>
//               <h3>Suggested Crops:</h3>
//               <ul>
//                 {crops.map((crop, index) => (
//                   <li key={index}>{crop.crop}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default LocationButton;



import React from 'react';
import './styles.css';

class LocationButton extends React.Component {
  state = {
    locationInput: '',
    soilType: '', // Updated to store the selected soil type
    crops: []
  };

  handleLocationChange = (event) => {
    this.setState({ locationInput: event.target.value });
  };

  handleSoilChange = (event) => {
    this.setState({ soilType: event.target.value });
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

  handleGetCrops = () => {
    const { locationInput, soilType } = this.state;

    if (locationInput && soilType) {
      // Fetch crops based on location and soil type
      this.fetchCropsByLocationAndSoil(locationInput, soilType);
    } else {
      alert('Please enter both location and select a soil type.');
    }
  };

  fetchCropsByLocationAndSoil = (location, soilType) => {
    // Assuming you have the crops.csv and state.csv data available

    // Fetch crops data based on location and soil type
    // Here you can use some logic to find the appropriate crops
    // from the data available in crops.csv and state.csv
    // For demonstration, let's assume you have the crops data available as an array
    // You can replace this with actual fetching and filtering logic based on your data structure

    // Example crops data
    const cropsData = [
      { crop: <h2>'Rice: Good farming methods for rice include adopting the System of Rice Intensification (SRI) which emphasizes practices like transplanting single seedlings, alternate wetting and drying of fields for water conservation, and integrated pest management (IPM) techniques to reduce chemical usage.'</h2>, temperature: '22-32', soil: 'Deep clayey' },
      { crop: <h2>'Wheat: For wheat farming in India, practices such as zero tillage or minimum tillage, balanced nutrient management using soil testing, adopting climate-resilient varieties, and timely sowing with proper seed treatment are recommended.'</h2>, temperature: '10-15', soil: 'Well-drained' },
      { crop: <h2>'Millets: Sustainable farming methods for millets in India include promoting mixed cropping with legumes for nitrogen fixation, adopting organic farming practices, rainwater harvesting, and utilizing traditional knowledge of millet cultivation among local communities.'</h2>, temperature: '27-32', soil: 'Alluvial' },
      { crop: <h2>'Grams: Integrated farming systems, conservation tillage, crop rotation with legumes like pigeon pea or lentils, and using biofertilizers or organic inputs are beneficial methods for chickpea cultivation in India.'</h2>, temperature: '20-25', soil: 'Loamy Soil' },
      { crop: <h2>'Sugar Cane: Good farming practices for sugarcane in India involve drip irrigation or micro-irrigation systems, adopting high-yielding and disease-resistant varieties, integrated nutrient management with organic inputs, and adopting mechanized harvesting methods to reduce labor costs.'</h2>, temperature: '21-27', soil: 'Deep rich loamy soil' },
      { crop: <h2>'Cotton: sustainable cotton farming methods include using Bt cotton varieties for pest resistance, integrated pest management (IPM) practices, water-saving technologies like drip irrigation or sprinklers, and promoting organic cotton farming for environmental sustainability.'</h2>, temperature: '21-30', soil: 'Black soil' },
      { crop: <h2>'Oilseeds: Integrated nutrient management, crop diversification with oilseed-legume rotations, adopting precision farming technologies like GIS mapping and remote sensing, and promoting hybrid or high-yielding oilseed varieties are beneficial for oilseed cultivation in India.'</h2>, temperature: '20-30', soil: 'Red soil' },
      { crop: <h2>'Tea: Good farming methods for tea in India include adopting shade management practices, proper pruning techniques, integrated pest and disease management (IPDM), soil conservation through mulching and contour plowing, and promoting organic tea cultivation.'</h2>, temperature: '20-30', soil: 'Well drained' },
      { crop: <h2>'Coffee: Sustainable coffee farming in India involves shade-grown cultivation under canopy trees, integrated pest and disease management, organic farming practices, water conservation methods like drip irrigation, and promoting agroforestry systems for biodiversity and soil health.

      '</h2>, temperature: '15-28', soil: 'Well drained' },
      { crop: <h2>'Potato'</h2>, temperature: '15-20', soil: 'Sandy loam' },
           { crop: <h2>'Tomato'</h2> , temperature: '15-30', soil: 'Well-drained loamy soil' },
         { crop: <h2>'Onion'</h2>, temperature: '10-25', soil: 'Sandy loam' },
        { crop: <h2>'Carrot'</h2>, temperature: '10-20', soil: 'Sandy loam' }
    ];

    // Filter crops based on soil type
    const filteredCrops = cropsData.filter(crop => crop.soil.toLowerCase() === soilType.toLowerCase());

    this.setState({ crops: filteredCrops });
  };

  render() {
    const { crops } = this.state;
  
    return (
      <div>
        <button onClick={this.handleGetLocation}>Use Current Location</button>
        <br />
        <div className="centered-container">
          <input
            type="text"
            placeholder="Enter location"
            value={this.state.locationInput}
            onChange={this.handleLocationChange}
            className="input-box"
          />
        </div>
        <br />
        <div className="centered-container">
          <select className="dropdown-select" value={this.state.soilType} onChange={this.handleSoilChange}>
            <option value="">Select Soil Type</option>
            <option value="Deep clayey">Deep clayey</option>
            <option value="Well-drained">Well-drained</option>
            <option value="Alluvial">Alluvial</option>
            <option value="Loamy Soil">Loamy Soil</option>
            <option value="Deep rich loamy soil">Deep rich loamy soil</option>
            <option value="Black soil">Black soil</option>
            <option value="Red soil">Red soil</option>
            <option value="Sandy soil">Sandy soil</option>
            <option value="Mountain soil">Mountain soil</option>
            <option value="Brown forest soil">Brown forest soil</option>
          </select>
        </div>
        <br />
        <button onClick={this.handleGetCrops}>Get Crops</button>
        
        {/* Scrollable container for displaying crops */}
        <div className="scrollable-container">
          {crops.length > 0 && (
            <div>
              <h3>Suggested Crops:</h3>
              <ul>
                {crops.map((crop, index) => (
                  <li key={index}>{crop.crop}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}  



export default LocationButton;


