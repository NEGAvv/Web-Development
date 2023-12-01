import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import apiKeys from "../../config/api-keys";

const MapContainer = () => {
  const googleMapsApiKey = apiKeys.googleMapsApiKey;

  const jyskLocations = [
    { lat: 46.96523011326174, lng: 32.02356934779999 },
    { lat: 46.988420574745405, lng: 31.998506785716813 },
    { lat: 46.41972457683552, lng: 30.709984306583635 },
    { lat: 46.464438081729874, lng: 30.740540031580796 },
    { lat: 46.587034059026365, lng: 30.792381766473113 },
    { lat: 46.566856647081195, lng: 30.83323716870749 },
    { lat: 48.54771294807378, lng: 35.0441235844522 },
    { lat: 48.48585548011311, lng: 34.93975346954296 },
    { lat: 50.221034842434456, lng: 36.40093503702396 },
    { lat: 50.95690933178534, lng: 34.75773331990836 },
    { lat: 48.79080321564238, lng: 30.242352484275216 },
    { lat: 50.0671041729785, lng: 24.08739614353424 },
    { lat: 50.34134463259858, lng: 28.712640183196516 },
    { lat: 50.47874824846022, lng: 30.64898053399339 },
    { lat: 50.41753471345026, lng: 30.616021550337834 },
    { lat: 50.43240813850208, lng: 30.52675763627072 },
    { lat: 50.457769671481174, lng: 30.52813092725637 },
    { lat: 50.458643964686914, lng: 30.470452705859152 },
    { lat: 50.49098145364506, lng: 30.47594586980175 },
  ];

  const mapStyles = {
    height: "500px",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={6}
        center={{ lat: 49.40320255593101, lng: 31.512093990456133 }} //центр України
      >
        {jyskLocations.map((location, index) => (
          <Marker key={index} position={location} title="JYSK" />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
