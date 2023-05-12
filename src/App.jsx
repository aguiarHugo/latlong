import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

function App() {
  const [coordinates, setCoordinates] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocalização não é suportada pelo seu navegador.");
    }
  };

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setCoordinates({ latitude, longitude });
  };

  const openGoogleMaps = () => {
    if (coordinates) {
      const { latitude, longitude } = coordinates;
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div>
      <button
        className='latlong-button'
        type='button'
        onClick={getLocation}
      >
        Lat / Long
      </button>

      <CSSTransition
        in={coordinates !== null}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="coordinates">
          {coordinates && (
            <p>
              Latitude: {coordinates.latitude}<br />
              Longitude: {coordinates.longitude}
            </p>
          )}

          {coordinates && (
            <button
              className='map-button'
              type='button'
              onClick={openGoogleMaps}
            >
              Abrir no Google Maps
            </button>
          )}
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
