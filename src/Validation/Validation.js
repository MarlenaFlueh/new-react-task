import React from 'react';

const validation = (props) => {
  if (props.length < 5) {
    return <p>it's too short</p>;
  }
  return <p>it's fine</p>;
};

export default validation;
