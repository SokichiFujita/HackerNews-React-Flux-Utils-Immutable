import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';

import StoryStore from './stores/StoryStore';
import FavStore from './stores/FavStore';
import ActionCreators from './actions/ActionCreators';

import LeftBar from './components/LeftBar';
import NewsList from './components/NewsList';
import TopBar from './components/TopBar';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { AppBar } from 'material-ui';
import { Layout, Fixed, Flex } from 'react-layout-pane';

injectTapEventPlugin();

class App extends Component {
  static getStores() {
    return [StoryStore, FavStore];
  }

  static calculateState() {
    return {
      stories: StoryStore.getState(),
      favs: FavStore.getState(),
    };
  }

  componentDidMount() {
    ActionCreators.getStories('top');
  }

  render() {
    return (
      <Layout type="column">
        <Fixed className="header">
          <AppBar title="HackerNews" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        </Fixed>
        <Fixed className="header"><TopBar /></Fixed>
        <Flex>
          <Layout type="row">
            <Fixed className="content"><LeftBar /></Fixed>
            <Flex className="content"><NewsList stories={this.state.stories} /></Flex>
          </Layout>
        </Flex>
      </Layout>
    );
  }
}

const AppContainer = Container.create(App);
render(<AppContainer />, document.getElementById('root'));
