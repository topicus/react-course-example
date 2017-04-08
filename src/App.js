import React, { Component } from 'react';
import PostList from './PostList';
import './App.css';
import { requestPosts } from './actions';
import { connect } from 'react-redux';
import PostBox from './PostBox';

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <PostBox />
        <PostList />
      </div>
    );
  }
}

export default connect(
  state => state,
  { requestPosts }
)(App);

