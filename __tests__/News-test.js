jest.unmock('../app/components/News');
jest.unmock('../node_modules/axios');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import News from '../app/components/News'

describe('<News />', () => {
  it('', () => {
    const story = {
      title: 'Hello',
      domain: 'example.com',
      link: 'http://example.com',
      comments_link: 'http://example.com',
      points: 3,
      submitter: 'Pete',
      submitter_profile: 'Pete',
      num_comments: 3,
    };
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <News story={story} />
    );
    const dom = renderer.getRenderOutput();
    expect(dom.props.primaryText.props.children.props.url).toEqual('http://example.com');
    expect(dom.props.primaryText.props.children.props.text).toEqual('Hello');
    expect(dom.props.secondaryText.props.children[0].props.color).toEqual('#666');
    expect(dom.props.secondaryText.props.children[2].props.text).toEqual('example.com');
  });
});
