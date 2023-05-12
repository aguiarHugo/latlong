import { useState } from 'react';
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

  return (
    <div>
      <button
        className='latlong-button'
        type='button'
        onClick={getLocation}
      >
        Lat / Long
      </button>

      {coordinates && (
        <>
          <h3>Suas coordenadas são:</h3>
          <p><span>Latitude:</span> {coordinates.latitude}</p>
          <p><span>Longitude:</span> {coordinates.longitude}</p>
        </>
      )}
    </div>
  );
}

export default App;
