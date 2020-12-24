import React from 'react';
import * as ReactDOM from 'react-dom';
import { SimpleStyledH1Application } from '../src/index';

describe('SimpleStyledH1Application', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SimpleStyledH1Application />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
