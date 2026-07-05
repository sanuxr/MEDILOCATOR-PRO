import React, { useMemo } from 'react';
import HospitalCard from './HospitalCard';
import { calculateDistance } from '../utils/distance';
import { hospitals } from '../data/hospitals';
import { AlertTriangle } from 'lucide-react';

const HospitalList = ({ userLocation }) => {
  const sortedHospitals = useMemo(() => {
    if (!userLocation) return hospitals;

    const hospitalsWithDistance = hospitals.map(hospital => ({
      ...hospital,
      distance: calculateDistance(
        userLocation.lat, 
        userLocation.lng, 
        hospital.lat, 
        hospital.lng
      )
    }));

    return hospitalsWithDistance.sort((a, b) => a.distance - b.distance);
  }, [userLocation]);

  const hasFarHospitals = sortedHospitals.length > 0 && sortedHospitals[0].distance > 100;

  return (
    <div className="hospital-list">
      <div className="list-header">
        <h2>{userLocation ? 'Nearest Hospitals' : 'All Hospitals'}</h2>
        <span className="results-count">{sortedHospitals.length} results</span>
      </div>

      {userLocation && hasFarHospitals && (
        <div className="warning-banner" style={{
          backgroundColor: '#fefce8', 
          border: '1px solid #fef08a',
          padding: '1rem',
          borderRadius: '0.75rem',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          color: '#854d0e'
        }}>
          <AlertTriangle size={24} className="text-warning" />
          <p><strong>Warning:</strong> No hospitals found within your immediate state/region. Showing closest national facilities.</p>
        </div>
      )}
      
      <div className="grid-container">
        {sortedHospitals.map(hospital => (
          <HospitalCard 
            key={hospital.id} 
            hospital={hospital} 
            distance={hospital.distance !== undefined ? hospital.distance : null} 
          />
        ))}
      </div>
    </div>
  );
};

export default HospitalList;
