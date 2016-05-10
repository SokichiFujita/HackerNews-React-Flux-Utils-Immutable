import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Home from 'material-ui/lib/svg-icons/action/home';
import FavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';
import FiberNew from 'material-ui/lib/svg-icons/av/fiber-new';
import People from 'material-ui/lib/svg-icons/social/people';
import Divider from 'material-ui/lib/divider';
import ActionCreators from '../actions/ActionCreators';

const LeftBar = (props) => (
  <List subheader="Board List" insetSubheader={false}>
    <Divider />
    <ListItem primaryText="Top" leftIcon={<Home />} onClick={() => ActionCreators.getStories('top')} />
    <ListItem primaryText="New" leftIcon={<FiberNew />} onClick={() => ActionCreators.getStories('newest')} />
    <ListItem primaryText="Best" leftIcon={<People />} onClick={() => ActionCreators.getStories('best')} />
    <ListItem primaryText="Fav" leftIcon={<FavoriteBorder />} onClick={() => ActionCreators.getStories('fav')} />
    <Divider />
  </List>
);

export default LeftBar;
