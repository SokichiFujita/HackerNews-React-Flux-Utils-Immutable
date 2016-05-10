import React from 'react';

const Sample = (props) => (
  <div>
    <h1>Hello</h1>
    <p>{props.title}</p>
  </div>
);

Sample.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Sample;
