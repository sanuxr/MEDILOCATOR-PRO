import React from 'react';
import { MapPin, Phone, Clock, Bed, Activity, Navigation } from 'lucide-react';

const HospitalCard = ({ hospital, distance }) => {
  return (
    <div className="hospital-card">
      <div className="card-header">
        <h3 className="hospital-name">{hospital.name}</h3>
        {distance !== null && (
          <div className="distance-badge">
            <Navigation size={14} />
            <span>{distance.toFixed(1)} km away</span>
          </div>
        )}
      </div>

      <div className="hospital-info">
        <div className="info-item">
          <MapPin size={16} className="icon text-primary" />
          <span>{hospital.address}</span>
        </div>
        <div className="info-item">
          <Phone size={16} className="icon text-primary" />
          <span>{hospital.contact}</span>
        </div>
      </div>

      <div className="hospital-stats">
        <div className="stat-box">
          <Bed size={20} className={hospital.beds > 10 ? "icon text-success" : "icon text-danger"} />
          <div className="stat-details">
            <span className="stat-value">{hospital.beds}</span>
            <span className="stat-label">Beds Available</span>
          </div>
        </div>
        <div className="stat-box">
          <Clock size={20} className={hospital.waitTime < 30 ? "icon text-success" : "icon text-warning"} />
          <div className="stat-details">
            <span className="stat-value">{hospital.waitTime} min</span>
            <span className="stat-label">Wait Time</span>
          </div>
        </div>
      </div>

      <div className="specializations">
        <Activity size={16} className="icon text-primary" />
        <div className="spec-tags">
          {hospital.specializations.map((spec, index) => (
            <span key={index} className="spec-tag">{spec}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
