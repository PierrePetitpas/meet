import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper, numberOfEvents ;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={numberOfEvents} updateEvents={() => {}}/>)
  });
  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  });
  test("render text input correctly from prop", () => {
    const numberOfEvents = NumberOfEventsWrapper.prop("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".NumberEventsInput").prop("value")).toBe(
      numberOfEvents
    );
  });
})