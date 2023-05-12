import Geocode from 'react-geocode';

const LocationButton = () => {
  const handleClick = () => {
    // Obter coordenadas geográficas
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

        // Abrir o Google Maps
        window.open(url, '_blank');
      },
      (error) => {
        console.error('Erro ao obter as coordenadas:', error);
      }
    );
  };

  return (
    <button onClick={handleClick}>Lat / Long</button>
  );
};

export default LocationButton;
