import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Este es el punto de entrada de la aplicación
// Esto significa que va a tomar todo lo que produzca el componente
// App creado usando react y lo va a meter dentro del div cuyo id es root.
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
