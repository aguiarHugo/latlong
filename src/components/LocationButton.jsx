import { useState, useEffect } from 'react';

const LocationButton = () => {
  const [currentCoordinates, setCurrentCoordinates] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateCoordinates();
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (currentCoordinates) {
      const url = `https://www.google.com/maps/search/?api=1&query=${currentCoordinates}`;
      window.open(url, '_blank');
    }
  }, [currentCoordinates]);

  const updateCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const newCoordinates = `${latitude},${longitude}`;

        if (newCoordinates !== currentCoordinates) {
          setCurrentCoordinates(newCoordinates);
        }
      },
      (error) => {
        console.error('Erro ao obter as coordenadas:', error);
      }
    );
  };

  return (
    <button onClick={updateCoordinates}>Lat / Long</button>
  );
};

export default LocationButton;
