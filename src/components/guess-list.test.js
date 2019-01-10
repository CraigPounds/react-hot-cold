import React from 'react';
import { shallow } from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {

  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[3, 27, 45, 66, 87]} />);
  });

  it('Renders guesses', () => {
    const GUESSES = [3, 33, 45, 66, 87, 90];
    let wrapper = shallow(<GuessList guesses={GUESSES} />);
    const LIST_ELEMENTS = wrapper.find('li');
    
    expect (LIST_ELEMENTS.length).toEqual(GUESSES.length);
    GUESSES.forEach((guess, i) => {
      expect(LIST_ELEMENTS.at(i).text()).toEqual(guess.toString());
    })
  })
});
