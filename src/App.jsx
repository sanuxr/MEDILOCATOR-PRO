import React, { useState } from 'react';
import LocationInput from './components/LocationInput';
import HospitalList from './components/HospitalList';
import { Activity } from 'lucide-react';
import './index.css';

function App() {
  const [userLocation, setUserLocation] = useState(null);

  const handleLocationSet = (lat, lng) => {
    setUserLocation({ lat, lng });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <Activity size={32} className="text-primary" />
          <h1>MediLocator</h1>
        </div>
        <p>Find the right care, right now.</p>
      </header>

      <main className="main-content">
        <section className="input-section">
          <LocationInput onLocationSet={handleLocationSet} />
        </section>

        <section className="results-section">
          <HospitalList userLocation={userLocation} />
        </section>
      </main>
    </div>
  );
}

export default App;
