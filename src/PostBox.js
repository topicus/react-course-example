import React from 'react';
import { submitPost, titleChange, summaryChange } from './actions';
import { connect } from 'react-redux';

const PostBox = ({title, summary, titleChange, summaryChange, submitPost}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>Title:</label>
        <input className="form-control" type="text" value={title} onChange={ e => titleChange(e.target.value) }/>
      </div>
      <div className="form-group">
        <label>Summary</label>
        <textarea className="form-control" value={summary} onChange={ e => summaryChange(e.target.value) }/>
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={e => submitPost({title, summary})}>Submit</button>
      </div>
    </div>
  );
};

export default connect(
  state => state.editor,
  { titleChange, summaryChange, submitPost }
)(PostBox);
