import React from 'react'
import { mount } from "enzyme";
import { DateForm } from '../DateForm';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <DateForm />
    </Root>
  )
});

afterEach(() => {
  wrapped.unmount();
});

it('has a form and two buttons', () => {
  expect(wrapped.find("form").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});