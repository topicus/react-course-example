import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import { Edit } from './Edit';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

    // <Router>
    //   <div>
    //     <Route exact path="/" component={App} />
    //     <Route path="/edit/:id" component={Edit}/>
    //   </div>
    // </Router>