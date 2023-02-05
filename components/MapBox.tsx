import React, { useState } from "react";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = ({ searchResults }: any) => {
  // Transform search results object into the  { latitude: 51.5103, longitude: 7.49347 } object
  const coordinates = searchResults.map((result: any) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // the latitude and longitude of the center of locations coordinates.
  const center: any = getCenter(coordinates);

  const viewport = {
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 4,
  };

  return (
    <Map
      mapStyle="mapbox://styles/ruturajchaubey/cldqwmxwu009t01o5exptvt2t"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        longitude: viewport.longitude,
        latitude: viewport.latitude,
        zoom: 14,
      }}
      style={{ width: viewport.width, height: viewport.width }}
    >
      <NavigationControl position="top-left" />
      {searchResults.map((result: any) => (
        <div key={result.long}>
          <Marker
            key={Math.random()}
            longitude={result.long}
            latitude={result.lat}
          >
            <p
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="pin"
            >
              📍
            </p>
          </Marker>

          {/* The popup that should show if we click on a Marker */}
          <Popup
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
          >
            {result.title}
          </Popup>
        </div>
      ))}
    </Map>
  );
};

export default MapBox;
