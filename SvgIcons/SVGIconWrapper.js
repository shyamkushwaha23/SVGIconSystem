import React from 'react';

export default (props) => {
  let classNames = 'svg-icon';
  props.className && (classNames = `${classNames} ${props.className}`);

  return (
    <svg className={classNames} xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox} aria-labelledby="title" style={props.style}>
      { props.children }
    </svg>
  );
}