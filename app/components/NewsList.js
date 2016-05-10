import React from 'react';
import List from 'material-ui/lib/lists/list';
import News from './News';

const NewsList = (props) => {
  const items = [];
  for (let [k, v] of props.stories) {
    items.unshift(<News story={v} key={k} rank={v.rank} />);
  }
  const style = { margin: '10px' };
  return (<List style={style}>{items}</List>);
};

export default NewsList;
