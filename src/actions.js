import * as actionTypes from './actionTypes';

export function requestPosts() {
  return async dispatch => {
    dispatch({
      type: actionTypes.REQUEST_POSTS
    });

    try {
      const response = await fetch('/posts');
      const data = await response.json();
      dispatch({
        type: actionTypes.REQUEST_POSTS_SUCCESS,
        posts: data
      });
    } catch(e) {
      dispatch({
        type: actionTypes.REQUEST_POSTS_ERROR
      });
    }
  }
};

export function vote(id) {
  return dispatch => {
    dispatch({
      type: actionTypes.VOTE,
      id: id
    });
  };
};

export function submitPost(post) {
  return dispatch => {
    dispatch({
      type: actionTypes.SUBMIT_POST,
      post: post
    });
  };
};

export function titleChange(title) {
  return dispatch => {
    dispatch({
      type: actionTypes.TITLE_CHANGE,
      title: title
    });
  };
};

export function summaryChange(summary) {
  return dispatch => {
    dispatch({
      type: actionTypes.SUMMARY_CHANGE,
      summary: summary
    });
  };
};

