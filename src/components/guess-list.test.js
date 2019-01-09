import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {

  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[3, 27, 45, 66, 87]} />);
  });
});
