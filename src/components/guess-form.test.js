import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm', () => {

  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should fire onMakeGuess cb when form is submitted', () => {
    const CB = jest.fn();
    const GUESS = 33;
    let wrapper = mount(<GuessForm onMakeGuess={CB} />);

    wrapper.find('input[type="number"]').instance().value = GUESS;
    wrapper.simulate('submit');
    expect(CB).toHaveBeenCalledWith(GUESS.toString());
  });

  it('Should reset the input when form is submitted', () => {
    let wrapper = mount(<GuessForm />);
    let input = wrapper.find('input[type="number"]');
    
    input.instance().value = 10;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});
