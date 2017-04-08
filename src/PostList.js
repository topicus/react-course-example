import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const PostList = ({posts}) => {
  return (
    <div className="row">
       <div className="col-md-12">
         {
            posts.map(post => (
              <Post key={post.id} {...post} />
            ))
         }
       </div>
    </div>
  );
};

export default connect( state => state, {})(PostList);
