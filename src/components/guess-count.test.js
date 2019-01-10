import React from 'react';
import { shallow } from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {

  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Renders correct number of guesses', () => {
    const GUESSES = 3;
    const wrapper = shallow(<GuessCount guessCount={GUESSES} />);
    expect(wrapper.text()).toEqual(`You've made ${GUESSES} guesses!`);
  });
});
