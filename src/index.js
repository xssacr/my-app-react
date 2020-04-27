import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MapProvider } from './context/MapContext';

ReactDOM.render(
  <MapProvider>
    <App />
  </MapProvider>,
  document.getElementById('root')
);

