import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {

  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('Renders feedback', () => {
    const FEEDBACK = 'Example test feedback';
    let wrapper = shallow(<Feedback feedback={FEEDBACK}/>);
    expect(wrapper.contains(FEEDBACK)).toEqual(true);
  })
});
