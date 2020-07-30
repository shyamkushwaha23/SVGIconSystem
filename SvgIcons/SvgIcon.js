import React from 'react';

export default (props) => {
  let classNames = 'svg-icon';
  props.className && (classNames = `${classNames} ${props.className}`);

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={classNames} 
      viewBox={props.viewBox} 
      style={props.style}>
      { props.children }
    </svg>
  );
}