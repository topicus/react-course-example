import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const initialStateEditor = {
  title: '',
  summary: ''
};

const getNextId = posts => {
  return posts.reduce((max, post) => {
    if(post.id > max)
      max = post.id;
    return max;
  }, 0) + 1;
};

const editor = (state = initialStateEditor, action) => {
  switch(action.type) {
    case actionTypes.TITLE_CHANGE:
      return Object.assign({}, state, {title: action.title});
    case actionTypes.SUMMARY_CHANGE:
      return Object.assign({}, state, {summary: action.summary});
    case actionTypes.SUBMIT_POST:
      return {title: '', summary: ''};
    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch(action.type) {
    case actionTypes.SUBMIT_POST:
      return [
        Object.assign({}, action.post, {votes: 0, id: getNextId(state) }), ...state
      ];
    case actionTypes.VOTE:
      let posts = state.map( post => {
        if(post.id === action.id) post.votes += 1;
        return post;
      });
      return posts;
    default:
      return state;
  }
};

const reducer = combineReducers({editor, posts});
export default reducer;