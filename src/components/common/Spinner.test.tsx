import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Spinner from './Spinner';

export default describe('Spinner Tests', () => {
  it('Renders successfully', () => {
    // Arrange
    const caption = 'Spinner caption';

    // Act
    const tree = shallow(<Spinner caption={caption} />);

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
  });
});
