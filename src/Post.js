import React from 'react';
import { vote } from './actions';
import { connect } from 'react-redux';

/**
 * Este componente es el encargado de renderizar 1 solo posts.
 *
 * Podríamos llamarlo PostItem también.
 */
const Post = ({id, title, summary, votes, vote}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <div>Votes: {votes || 0}</div>
      <button onClick={ event => vote(id) }>+1</button>
    </div>
  );
};

export default connect(
  state => state,
  { vote }
)(Post);