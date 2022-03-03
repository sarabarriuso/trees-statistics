import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

export default describe('App Tests', () => {
  it('Renders App successfully', () => {
    // Arrange
    // Act
    const tree = shallow(<App />);

    // Assert
    expect(toJson(tree)).toMatchSnapshot();
  });
});
