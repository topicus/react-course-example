import React, { Component } from 'react';
import Post from './Post';
import PostBox from './PostBox';

/**
 * Este componente por un lado se encarga de mostrar el postBox y por el
 * otro renderiza la lista de posts que se encuentran en el estado.
 */
export default class PostList extends Component {

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