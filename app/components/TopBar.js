import React from 'react';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

const TopBar = () => (
  <Toolbar>
    <ToolbarGroup float="left">
      <ToolbarTitle id="title" text="A Hacker News Reader" />
    </ToolbarGroup>
  </Toolbar>
);

export default TopBar;
