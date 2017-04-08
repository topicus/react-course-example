import React from 'react';


export const Edit = ({match}) => {
  return (
    <div>Edit: {match.params.id}</div>
  );
}