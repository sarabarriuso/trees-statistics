import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from './Dashboard';

import * as TreesSelectors from '../store/bundles/treesSelectors';
import TreeChart from './TreeChart';
import Spinner from './common/Spinner';

export default describe('Dashboard Tests', () => {
  const getLoadingPlantedTreesDataMock = jest.spyOn(
    TreesSelectors,
    'GetLoadingPlantedTreesData',
  );

  afterEach(() => {
    getLoadingPlantedTreesDataMock.mockClear();
  });

  it('Renders successfully when is not loading tree data', () => {
    // Arrange
    getLoadingPlantedTreesDataMock.mockReturnValue(false);
    // Act
    const tree = shallow(<Dashboard />);

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
    const treeChart = tree.find(TreeChart);
    const spinner = tree.find(Spinner);
    expect(treeChart.length).toBe(1);
    expect(spinner.length).toBe(0);
  });

  it('Renders successfully when is loading tree data', () => {
    // Arrange
    getLoadingPlantedTreesDataMock.mockReturnValue(true);
    // Act
    const tree = shallow(<Dashboard />);

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
    const treeChart = tree.find(TreeChart);
    const spinner = tree.find(Spinner);
    expect(treeChart.length).toBe(0);
    expect(spinner.length).toBe(1);
  });
});
