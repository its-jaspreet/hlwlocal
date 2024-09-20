import React from "react";

function Location() {
  return (
    <div className="location">
      <img src="./src/assets/Header/location-icon.svg" />
      <select id="location">
        <option value="chandigarh">Chandigarh</option>
        <option value="gajraula">Gajraula</option>
        <option value="jamnagar">Jamnagar</option>
        <option value="pune">Pune</option>
      </select>
    </div>
  );
}

export default Location;
