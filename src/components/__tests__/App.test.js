import React from 'react'
import { shallow } from "enzyme";
import App from '../App';
import DateForm from '../DateForm';
import ShowRedux from '../ShowRedux';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows DateForm component', () => {
  expect(wrapped.find(DateForm).length).toEqual(1);
});

it('shows ShowRedux component', () => {
  expect(wrapped.find(ShowRedux).length).toEqual(1);
})