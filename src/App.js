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
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  getNextId() {
    // Necesitamos saber el id maximo anterior y a eso
    // sumarle 1 para obtener el nuevo id.
    // Reduce itera sobre cada post y compara max contra
    // el id del elemento actual de la iteración.
    // Si el valor es más grande el id pasa a ser el nuevo max.
    //
    // Retornamos max en cada iteracion para que en la siguiente
    // podamos compara contra el nuevo maximo.
    //
    // Finalmente retornamos lo que devuelve reduce (el maximo) + 1
    return this.state.posts.reduce((max, post) => {
      if(post.id > max)
        max = post.id;

      return max;
    }, 0) + 1;
  }

  // Este listener escucha cada vez que un posts es submiteado.
  onPostSubmit(post){
    // Para los id estamos utilizando un valor que se incrementa
    post.id = this.getNextId();

    // Esta sintaxis puede parecer un poco extraña:
    // [post, ...this.state.posts]
    // Lo que hace es simplemente decir que el primer
    // elemento del array va a ser post y va a extraer
    // todos los posts que se encuentran dentro de this.state.posts
    // para el resto del array.
    //
    // En definitiva hacemos que el nuevo post vaya al principio de
    // la lista así podemos verlo luego de presionar submit sin necesidad
    // de hacer scroll.
    this.setState({posts: [post, ...this.state.posts]})
  }

  componentDidMount() {
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(posts => this.setState({posts}));
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="container">
        <PostList className="row" onPostSubmit={this.onPostSubmit.bind(this)} posts={this.state.posts} />
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
