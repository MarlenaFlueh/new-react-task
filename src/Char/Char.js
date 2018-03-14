import React from 'react';
import './../App.css';

const char = (props) => {
  return (
    <div className='char' onClick={props.click}>
      <p>{props.name}</p>
    </div>
  )
};

export default char;
