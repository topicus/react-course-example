import React, { Component } from 'react';
import Post from './Post';
import PostBox from './PostBox';

/**
 * Este componente por un lado se encarga de mostrar el postBox y por el
 * otro renderiza la lista de posts que se encuentran en el estado.
 */
export default class PostList extends Component {



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

  submitPost(post) {
    this.props.onPostSubmit(post);
  }

  render() {
    // Hacemos esto para evitar tipear siempre this.state...
    const posts = this.props.posts;

    return (
      <div className="row">
        <PostBox submitPost={this.submitPost.bind(this)}/>
        <div className="col-md-12">
          {
            // Cada post es un objeto pero para renderizar nosotros necesitamos
            // un componente. Para eso nos sirve map. Map itera sobre cada objeto
            // post de la lista y devuelve un componente post pasando los datos
            // por propiedad.
            posts.map(post => (
              <Post key={post.id} title={post.titulo} summary={post.bajada} />
            ))
          }
        </div>
      </div>
    );
  }
}