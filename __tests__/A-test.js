jest.unmock('../app/components/A');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import A from '../app/components/A'

describe('<A />', () => {
  it('', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <A url="http://example.com" color="#666" text="hello" />
    );
    const dom = renderer.getRenderOutput();
    expect(dom.props.href).toEqual('http://example.com');
    expect(dom.props.children).toEqual('hello');
    expect(dom.props.style.color).toEqual('#666');
  });
});
