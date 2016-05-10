import React from 'react';

const A = (props) => {
  const style = { textDecoration: 'none', color: props.color };
  return (<a href={props.url} target="_brank" style={style}>{props.text}</a>);
};

export default A;
