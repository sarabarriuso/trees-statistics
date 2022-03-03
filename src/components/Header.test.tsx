import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './Header';

export default describe('Header Tests', () => {
  it('Renders successfully', () => {
    // Arrange
    // Act
    const tree = shallow(<Header />);

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
  });
});
