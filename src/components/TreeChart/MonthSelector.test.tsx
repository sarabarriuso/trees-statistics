import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MonthSelector from './MonthSelector';
import { Slider } from '@mui/material';

export default describe('Month Selector Index Tests', () => {
  it('Renders successfully ', () => {
    // Arrange
    // Act
    const tree = shallow(
      <MonthSelector
        description='Hi I am a description'
        defaultMonth={1}
        monthSelectedCallback={() => {
          return;
        }}
      />,
    );

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('Changing the month will trigger the monthSelectedCallback', () => {
    // Arrange
    let callbackCalled = false;

    // Act
    const tree = shallow(
      <MonthSelector
        description='Hi I am a description'
        defaultMonth={1}
        monthSelectedCallback={() => {
          callbackCalled = true;
        }}
      />,
    );

    const slider = tree.find(Slider);
    const sliderCallback = slider.props().onChangeCommitted;
    if (sliderCallback !== undefined) {
      sliderCallback(new Event('click', undefined), 5);

      //Assert
      expect(callbackCalled).toBeTruthy();
    }
  });
});
