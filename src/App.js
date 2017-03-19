import React, { Component } from 'react';
import PostList from './PostList';
import postData from './postsData';
import './App.css';


/**
 * Este componente es el contenedor de nuestra aplicación.
 *
 * Dentro ponemos PostList y le pasamos por propiedad los posts iniciales.
 *
 * postData es un array de objetos posts definidos dentro de postData.js
 */
class App extends Component {
  render() {
    return (
      <div className="container">
        <PostList className="row" posts={postData} />
      </div>
    );
  }
}

// Export default sirve para indicar que por default
// este archivo exporta App. Por ejemplo React exporta por defecto
// la variable React pero al mismo tiempo exporta Component.
//
// Notese que el import de react luce como lo siguiente:
//
// import React, {Component} from 'react';
export default App;
