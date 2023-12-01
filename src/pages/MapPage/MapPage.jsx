import React from "react";
import MapContainer from "../../components/MapContainer/MapContainer";

const MapPage = () => {
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div style={{ width: "76%", marginBottom: 10 }}>
        <h1>Магазини JYSK</h1>
        <MapContainer />
      </div>
      <div
        style={{ display: "flex", marginLeft: "20px", alignItems: "center" }}
      >
        <div>
          <h2>Робочі години</h2>
          <p>Четвер 19:00</p>
          <p>П'ятниця 10:00 - 19:00</p>
          <p>Субота 10:00 - 19:00</p>
          <p>Неділя 10:00 - 19:00</p>
          <p>Понеділок 10:00 - 19:00</p>
          <p>Вівторок 10:00 - 19:00</p>
          <p>Середа 10:00 - 19:00</p>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
