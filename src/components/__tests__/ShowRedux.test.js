import React from 'react';
import { mount } from 'enzyme';
import ShowRedux from '../ShowRedux';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <ShowRedux />
    </Root>
  )
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find("div").length).toEqual(1);
});