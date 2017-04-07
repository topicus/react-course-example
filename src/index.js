import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose} from 'redux';

const reducer = (state, action) => {
  console.log(action);
  return state;
};
const store = createStore(reducer);
store.dispatch({
  type: 'ADD_USER',
  user: {name: 'Dan'}
});

// Este es el punto de entrada de la aplicación
// Esto significa que va a tomar todo lo que produzca el componente
// App creado usando react y lo va a meter dentro del div cuyo id es root.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
