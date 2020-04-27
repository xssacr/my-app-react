import React, { Component } from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default class Map extends Component {
  render() {
    return (
      <MapContainer>
        <iframe src="/map.html" title="map"></iframe>
      </MapContainer>
    );
  }
}
