import React from 'react';
import { shallow } from 'enzyme';
import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {

  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Renders auralStatus', () => {
    const AURAL_STATUS = 'Example test aural-status';
    let wrapper = shallow(<AuralStatus auralStatus={AURAL_STATUS} />);
    expect(wrapper.contains(AURAL_STATUS)).toEqual(true);
  })
});
