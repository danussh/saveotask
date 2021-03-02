import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Maps = ({map}) => {
map.map((val,i)=>{
  return <h1>{val}</h1>
})
  const [viewport, setViewport] = React.useState({
    latitude: 11.127123,
    longitude: 78.656891,
    zoom: 5.5,
    width: "80%",
    height: "394px",
    //   banglore 12.9716° N, 77.5946° E
  });

  return (
    <>
    
    <ReactMapGL
      {...viewport}
      mapStyle={"mapbox://styles/mapbox/streets-v11"}
      mapboxApiAccessToken={
        "pk.eyJ1IjoiZGFudXNzaCIsImEiOiJja2xybmpleHgwNHAyMnFwdjJib21qNHl4In0.-N3frkK86GpRphL2AWRfTw"
      }
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker
        latitude={13.0827}
        longitude={80.2707}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Location_dot_blue.svg/1024px-Location_dot_blue.svg.png"
          alt="https://cdn2.iconfinder.com/data/icons/vehicle-18/100/transport-08-512.png"
          width={viewport.zoom * 3}
          height={viewport.zoom * 3}
        />
      </Marker>
      <Marker
        latitude={12.9716}
        longitude={77.5946}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/vehicle-18/100/transport-08-512.png"
          alt=""
          width={viewport.zoom * 4}
          height={viewport.zoom * 4}
        />
      </Marker>
 
    </ReactMapGL>
    </>
    
  );
};

export default Maps;
