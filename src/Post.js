import React, { Component } from 'react';


/**
 * Este componente es el encargado de renderizar 1 solo posts.
 *
 * Podríamos llamarlo PostItem también.
 */
export default class Post extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.summary}</p>
        <div>Votes: {this.props.votes || 0}</div>
        <button onClick={ event => this.props.vote(this.props.id) }>+1</button>
      </div>
    );
  }
}
