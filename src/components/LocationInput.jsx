import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

// Default coordinates for New Delhi, India
const DEFAULT_LAT = 28.6139;
const DEFAULT_LNG = 77.2090;

const LocationInput = ({ onLocationSet }) => {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGetLocation = () => {
    setIsLoading(true);
    setError('');
    
    if (!navigator.geolocation) {
      handleFallback('Geolocation is not supported by your browser. Defaulting to New Delhi.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude.toFixed(4));
        setLng(position.coords.longitude.toFixed(4));
        onLocationSet(position.coords.latitude, position.coords.longitude);
        setIsLoading(false);
      },
      (err) => {
        handleFallback('Unable to retrieve your location. Defaulting to New Delhi.');
      },
      { timeout: 10000 }
    );
  };

  const handleFallback = (errorMessage) => {
    setError(errorMessage);
    setLat(DEFAULT_LAT.toFixed(4));
    setLng(DEFAULT_LNG.toFixed(4));
    onLocationSet(DEFAULT_LAT, DEFAULT_LNG);
    setIsLoading(false);
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (lat && lng) {
      onLocationSet(parseFloat(lat), parseFloat(lng));
      setError('');
    } else {
      setError('Please enter valid coordinates');
    }
  };

  return (
    <div className="location-input-container">
      <div className="glass-panel">
        <h2>Find Nearby Hospitals</h2>
        <p className="subtitle">Enter your coordinates or use GPS to find the closest medical facilities.</p>
        
        <button 
          className="btn-primary" 
          onClick={handleGetLocation}
          disabled={isLoading}
        >
          <Navigation size={18} />
          {isLoading ? 'Locating...' : 'Use My Current Location'}
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <form onSubmit={handleManualSubmit} className="manual-input-form">
          <div className="input-group">
            <label>Latitude</label>
            <div className="input-wrapper">
              <MapPin size={16} className="input-icon" />
              <input 
                type="number" 
                step="any"
                placeholder="e.g. 28.6139" 
                value={lat} 
                onChange={(e) => setLat(e.target.value)}
              />
            </div>
          </div>
          <div className="input-group">
            <label>Longitude</label>
            <div className="input-wrapper">
              <MapPin size={16} className="input-icon" />
              <input 
                type="number" 
                step="any"
                placeholder="e.g. 77.2090" 
                value={lng} 
                onChange={(e) => setLng(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn-secondary">Search Manually</button>
        </form>

        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default LocationInput;
