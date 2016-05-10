jest.unmock('../app/components/TopBar');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TopBar from '../app/components/TopBar'

describe('<TopBar />', () => {
  it('', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <TopBar />
    );
    const dom = renderer.getRenderOutput();
    expect(dom.props.children.props.children.props.text).toEqual('A Hacker News Reader');
  });
});
