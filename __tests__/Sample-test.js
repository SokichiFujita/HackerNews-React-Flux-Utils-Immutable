jest.unmock('../app/components/Sample');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Sample from '../app/components/Sample'

describe('<Sample />', () => {
  it('displays "Hello World"', () => {
    const app = TestUtils.renderIntoDocument(
      <div>
        <Sample title="World" />
      </div>
    );
    const appNode = ReactDOM.findDOMNode(app);
    expect(appNode.textContent).toEqual('HelloWorld');
  });
});
