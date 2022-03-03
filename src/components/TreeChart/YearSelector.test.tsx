import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import YearSelector from './YearSelector';
import { Slider } from '@mui/material';

export default describe('Year Selector Index Tests', () => {
  it('Renders successfully ', () => {
    // Arrange
    // Act
    const tree = shallow(
      <YearSelector
        description='Hi I am a description'
        defaultYear={1}
        yearSelectedCallback={() => {
          return;
        }}
      />,
    );

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('Changing the year will trigger the yearSelectedCallback', () => {
    // Arrange
    let callbackCalled = false;

    // Act
    const tree = shallow(
      <YearSelector
        description='Hi I am a description'
        defaultYear={1}
        yearSelectedCallback={() => {
          callbackCalled = true;
        }}
      />,
    );

    const slider = tree.find(Slider);
    const sliderCallback = slider.props().onChangeCommitted;
    if (sliderCallback !== undefined) {
      sliderCallback(new Event('click', undefined), 2020);

      //Assert
      expect(callbackCalled).toBeTruthy();
    }
  });
});
