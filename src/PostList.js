import React, { Component } from 'react';
import Post from './Post';
import PostBox from './PostBox';

/**
 * Este componente por un lado se encarga de mostrar el postBox y por el
 * otro renderiza la lista de posts que se encuentran en el estado.
 */
export default class PostList extends Component {
  constructor(props) {
    super(props);

    // Copiamos los posts que vienen por propiedad y los pasamos al estado.
    // Esto quiere decir que de ahora en más este componente va a ser responsable
    // de manejar la lista de posts.
    //
    // Es comun que las propiedades que se le pasan a un componente puedan
    // luego ser parte del estado del mismo. No obstante, si el componente
    // necesita cambiar el array de posts lo hace sobre el estado pero
    // no sobre la propiedad.
    this.state = {
      posts: this.props.posts
    };
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

  render() {
    // Hacemos esto para evitar tipear siempre this.state...
    const posts = this.state.posts;
    return (
      <div className="row">
        <PostBox submitPost={this.onPostSubmit.bind(this)}/>
        <div className="col-md-12">
          {
            // Cada post es un objeto pero para renderizar nosotros necesitamos
            // un componente. Para eso nos sirve map. Map itera sobre cada objeto
            // post de la lista y devuelve un componente post pasando los datos
            // por propiedad.
            posts.map(post => (
              <Post key={post.id} title={post.title} summary={post.summary} />
            ))
          }
        </div>
      </div>
    );
  }
}