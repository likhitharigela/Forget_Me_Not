import React from 'react';
import LocationButton from './LocationButton';
import './styles.css';
import Footer from './footer.js';

function App() {
  return (
    <div className="App">
      <h1>Kheti</h1>
      <h2 className='sub'>Farming is important because it sustains food production, drives economic growth, creates employment opportunities, promotes environmental sustainability, and preserves cultural heritage.</h2>
      <LocationButton />
      <Footer />
    </div>
  );
}

export default App;
